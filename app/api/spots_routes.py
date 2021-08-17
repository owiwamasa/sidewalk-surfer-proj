from flask import Blueprint, jsonify
from flask_login import login_required
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
    if form.validate_on_submit():
        spot = form.populate_obj(Spot())
        db.session.add(spot)
        db.session.commit()
        print('------------------', spot)
        return jsonify(spot.to_dict())


@spots_routes.route('/<int:id>')
def one_spot(id):
    spot = Spot.query.get(id)
    return {'spots': [spot.to_dict()]}
