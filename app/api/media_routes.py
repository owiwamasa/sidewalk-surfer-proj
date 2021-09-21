from app.models.comment import Comment
from flask import Blueprint, jsonify,request
from app.models import Media, User, Comment,db
from app.forms import MediaForm
from flask_login import login_required, current_user
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)


media_routes = Blueprint('media', __name__)

@media_routes.route('/')
def recent_media():
	media = Media.query.order_by(Media.createdAt.desc()).all()
	return {'media': [medium.to_dict() for medium in media]}

@media_routes.route('/spots/<int:id>')
def spot_media(id):
	media = Media.query.join(User).join(Comment).filter(Media.spotId == id).order_by(Media.createdAt.desc()).all()
	return {'media': [medium.to_dict() for medium in media]}

@media_routes.route('/<int:id>')
def one_medium(id):
	media = Media.query.get(id)
	return {'media': [media.to_dict()]}

@media_routes.route('/spots/<int:id>', methods=["POST"])
@login_required
def create_media(id):
    form = MediaForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if "mediaUrl" not in request.files:
        return ["mediaUrl required"], 400

    mediaUrl = request.files["mediaUrl"]

    if not allowed_file(mediaUrl.filename):
        return ["file type not permitted"], 400

    mediaUrl.filename = get_unique_filename(mediaUrl.filename)

    upload = upload_file_to_s3(mediaUrl)

    if "url" not in upload:
        return upload, 400
    url = upload["url"]

    if form.validate_on_submit():
        media = Media(
            spotId = id,
            userId = current_user.id,
            description=form.description.data,
            mediaUrl=url
        )
        db.session.add(media)
        db.session.commit()

        return media.to_dict()
    errors = form.errors
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400

@media_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_media(id):
    medium = Media.query.get(id)
    form = MediaForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if "mediaUrl" not in request.files:
        return {"errors": "mediaUrl required"}, 400

    mediaUrl = request.files["mediaUrl"]

    if not allowed_file(mediaUrl.filename):
        return {"errors": "file type not permitted"}, 400

    mediaUrl.filename = get_unique_filename(mediaUrl.filename)

    upload = upload_file_to_s3(mediaUrl)

    if "url" not in upload:
        return upload, 400
    url = upload["url"]

    if form.validate_on_submit():
        medium.description=form.description.data,
        medium.mediaUrl=url,

        db.session.commit()
        media = Media.query.join(User).join(Comment).filter(Media.spotId == medium.spotId).order_by(Media.createdAt.desc()).all()
        return {'media': [medium.to_dict() for medium in media]}
    errors = form.errors
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400

@media_routes.route('/<int:id>',methods=['DELETE'])
def delete_media(id):
    medium = Media.query.get(id)
    db.session.delete(medium)
    db.session.commit()
    return 'deleted'
