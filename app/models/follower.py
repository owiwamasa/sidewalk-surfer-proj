from .db import db


class Follower(db.Model):
    __tablename__ = 'followers'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    followerId = db.Column(db.Integer, db.ForeignKey('users.id'))

    def to_dict(self):
        return{
            'id': self.id,
            'userId': self.userId,
            'followerId': self.followerId
        }
