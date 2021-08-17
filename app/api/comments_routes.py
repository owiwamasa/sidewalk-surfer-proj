from flask import Blueprint, jsonify
from app.models import Comment

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/')
def all_comments():
	comments = Comment.query.all()
	return {'comments': [comment.to_dict() for comment in comments]}

@comments_routes.route('/<int:id>')
def one_comment(id):
	comment = Comment.query.get(id)
	return { 'comments': [comment.to_dict()]}
