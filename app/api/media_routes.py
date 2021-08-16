from flask import Blueprint, jsonify
from app.models import Media

media_routes = Blueprint('media', __name__)


@media_routes.route('/')
def recent_media():
	media = Media.query.order_by(Media.createdAt).limit(5)
	return {'media': [medium.to_dict() for medium in media]}

@media_routes.route('/spots/<int:id>')
def spot_media(id):
	media = Media.query.filter(Media.spotId == id).all()
	return {'media': [medium.to_dict() for medium in media]}

@media_routes.route('/<int:id>')
def one_medium(id):
	media = Media.query.get(id)
	return {'media': [media.to_dict()]}
