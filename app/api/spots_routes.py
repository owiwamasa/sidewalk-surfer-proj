from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Spot, db
from app.forms import SpotForm
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

spots_routes = Blueprint('spots', __name__)

@spots_routes.route('/')
def all_spots():
    spots = Spot.query.all()
    return {'spots': [spot.to_dict() for spot in spots]}

@spots_routes.route('/', methods=["POST"])
def create_spot():
    print('>>>>>>>>>>>>>>>>>>>>>>>>>','00')
    form = SpotForm()
    print('>>>>>>>>>>>>>>>>>>>>>>>>>','form')
    form['csrf_token'].data = request.cookies['csrf_token']

    print('>>>>>>>>>>>>>>>>>>>>>>>>>','0101010101')
    if "mediaUrl" not in request.files:
        print('>>>>>>>>>>>>>>>>>>>>>>>>>','11')
        return ["mediaUrl required"], 400

    mediaUrl = request.files["mediaUrl"]

    if not allowed_file(mediaUrl.filename):
        print('>>>>>>>>>>>>>>>>>>>>>>>>>','22')
        return ["file type not permitted"], 400

    mediaUrl.filename = get_unique_filename(mediaUrl.filename)

    upload = upload_file_to_s3(mediaUrl)

    if "url" not in upload:
        print('>>>>>>>>>>>>>>>>>>>>>>>>>','33')
        return upload, 400
    url = upload["url"]

    if form.validate_on_submit():
        spot = Spot(
            name=form.name.data,
            address=form.address.data,
            latitude=form.latitude.data,
            longitude=form.longitude.data,
            description=form.description.data,
            imageUrl=url,
            userId=current_user.id
        )
        db.session.add(spot)
        db.session.commit()
        spots = Spot.query.all()
        print('>>>>>>>>>>>>>>>>>>>>>>>>>','44',Spot)
        return spot.to_dict()
    errors = form.errors
    print('>>>>>>>>>>>>>>>>>>>>>>>>>','55',errors)
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400



@spots_routes.route('/<int:id>')
def one_spot(id):
    spot = Spot.query.get(id)
    return spot.to_dict()

@spots_routes.route('/<int:id>', methods = ["PUT"])
def edit_spot(id):
    spot = Spot.query.get(id)
    form = SpotForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        spot.name=form.name.data,
        spot.address=form.address.data,
        spot.latitude=form.latitude.data,
        spot.longitude=form.longitude.data,
        spot.description=form.description.data,
        spot.imageUrl=form.imageUrl.data,
        spot.userId=current_user.id
        db.session.commit()
        return spot.to_dict()
    errors = form.errors
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400

