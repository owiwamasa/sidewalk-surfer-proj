from flask_wtf import FlaskForm
from wtforms import StringField,DecimalField
from wtforms.validators import DataRequired,ValidationError
from app.models import Spot

class SpotForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    address = StringField('Address', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    latitude= DecimalField('Latitude', validators=[DataRequired()])
    longitude = DecimalField('Longitude', validators=[DataRequired()])
    imageUrl = StringField('Spot Image',validators=[DataRequired()], placeholder='image URL')