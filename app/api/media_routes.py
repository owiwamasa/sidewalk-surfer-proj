from app.models.comment import Comment
from flask import Blueprint, jsonify,request
from app.models import Media, User, Comment,db
from app.forms import MediaForm
from flask_login import login_required, current_user


media_routes = Blueprint('media', __name__)

@media_routes.route('/')
def recent_media():
	media = Media.query.join(Comment).order_by(Media.createdAt.desc())
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
def create_media(id):
    form = MediaForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        media = Media(
            spotId = id,
            userId = current_user.id,
            description=form.description.data,
            mediaUrl=form.mediaUrl.data,
        )
        db.session.add(media)
        db.session.commit()

        return media.to_dict()

@media_routes.route('/<int:id>', methods=["PUT"])
def edit_media(id):
    medium = Media.query.get(id)
    form = MediaForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        medium.description=form.description.data,
        medium.mediaUrl=form.mediaUrl.data,

        db.session.commit()
        media = Media.query.join(User).join(Comment).filter(Media.spotId == medium.spotId).order_by(Media.createdAt.desc()).all()
        return {'media': [medium.to_dict() for medium in media]}

@media_routes.route('/<int:id>',methods=['DELETE'])
def delete_media(id):
    medium = Media.query.get(id)
    db.session.delete(medium)
    db.session.commit()
    return 'deleted'
