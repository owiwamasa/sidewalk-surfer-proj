from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Spot

spots_routes = Blueprint('spots', __name__)

@spots_routes.route('/')
def all_spots():
    spots = Spot.query.all()
    return {'spots': [spot.to_dict() for spot in spots]}

@spots_routes.route('/<int:id>')
def one_spot(id):
    spot = Spot.query.get(id)
    return {'spots': [spot.to_dict()]}
