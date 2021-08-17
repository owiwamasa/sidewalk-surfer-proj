from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired,ValidationError
from app.models import Comment

class CommentForm(FlaskForm):
    comment = StringField('Comment', validators=[DataRequired()], placeholder='comment here...')