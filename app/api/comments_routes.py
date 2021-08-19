from flask import Blueprint, jsonify, request
from app.models import Comment, User, db
from flask_login import current_user
from app.forms import CommentForm

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/')
def all_comments():
	comments = Comment.query.join(User).all()
	return {'comments': [comment.to_dict() for comment in comments]}

@comments_routes.route('/', methods=['POST'])
def post_comment():
	print('------------------')
	form = CommentForm()
	form['csrf_token'].data = request.cookies['csrf_token']
	if form.validate_on_submit():
		comment = Comment(
			comment=form.comment.data,
			userId=current_user.id,
			mediaId=form.mediaId.data
		)
		db.session.add(comment)
		db.session.commit()
		return comment.to_dict()

@comments_routes.route('/<int:id>')
def one_comment(id):
	comment = Comment.query.get(id)
	return { 'comments': [comment.to_dict()]}
