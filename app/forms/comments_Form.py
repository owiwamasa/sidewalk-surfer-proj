from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired,ValidationError
from app.models import Comment


class CommentForm(FlaskForm):
    comment = StringField('Comment', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
    mediaId = IntegerField('mediaId', validators=[DataRequired()])
