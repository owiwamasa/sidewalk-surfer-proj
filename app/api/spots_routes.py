from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Spot, db
from app.forms import SpotForm
from flask_login import current_user

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
        return {'spot': spot.to_dict()}


@spots_routes.route('/<int:id>')
def one_spot(id):
    spot = Spot.query.get(id)
    return {'spots': [spot.to_dict()]}
