from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired,ValidationError
from app.models import Media

class MediaForm(FlaskForm):
    description = StringField('Description', validators=[DataRequired()])
    mediaUrl = StringField('Media',validators=[DataRequired()])