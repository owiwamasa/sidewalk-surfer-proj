from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(500), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    mediaId = db.Column(db.Integer, db.ForeignKey('media.id'), nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=db.func.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=db.func.now(), onupdate=db.func.now())


    media = db.relationship("Media", back_populates="comments")
    user = db.relationship("User", back_populates="comments")



    def to_dict(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'userId': self.userId,
            'mediaId': self.mediaId,
            'username': self.user.username,
            'createdAt': self.createdAt
        }
