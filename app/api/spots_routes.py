from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Spot, db
from app.forms import SpotForm

spots_routes = Blueprint('spots', __name__)

@spots_routes.route('/')
def all_spots():
    spots = Spot.query.all()
    return {'spots': [spot.to_dict() for spot in spots]}

@spots_routes.route('/', methods=["POST"])
def create_spot():
    form = SpotForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        spot = Spot(
            name=form.name.data,
            address=form.address.data,
            latitude=form.latitude.data,
            longitude=form.longitude.data,
            description=form.description.data,
            imageUrl=form.imageUrl.data,
            userId=current_user.id
        )
        db.session.add(spot)
        db.session.commit()
        spots = Spot.query.all()
        return spot.to_dict()


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
