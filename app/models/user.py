from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profilepic = db.Column(db.String(500))


    media = db.relationship("Media", back_populates="user")
    comments = db.relationship("Comment", back_populates="user")

#! maybe useful for many-to-many relationship
# followers = db.relationship(
#     "User",
#     secondary=follows,
#     primaryjoin=(follows.c.follower_id == id),
#     secondaryjoin=(follows.c.followed_id == id),
#     backref=db.backref("follows", lazy="dynamic"),
#     lazy="dynamic"

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profilepic':self.profilepic
        }

follows = db.Table(
    "follows",
    db.Column("follower_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("followed_id", db.Integer, db.ForeignKey("users.id"))
)
