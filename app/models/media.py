from .db import db


class Media(db.Model):
    __tablename__ = 'media'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(500))
    mediaUrl = db.Column(db.String(500))
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    spotId = db.Column(db.Integer, db.ForeignKey('spots.id'))


comments = db.relationship("Comment", back_populates="media")
spots = db.relationship("Spot", back_populates="media")
user = db.relationship("User", back_populates="media")

    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'mediaUrl': self.mediaUrl,
            'userId': self.userId,
            'spotId': self.spotId
        }
