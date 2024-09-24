from sqlalchemy.orm import relationship
from restaurant_app.extensions import db


from datetime import datetime

class Review(db.Model):
    __tablename__ = "reviews"
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurant.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    
    comment = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, onupdate=datetime.now)
    
    
    
    # user = db.relationship('User', backref=db.backref('reviews', lazy=True))
    # restaurant = db.relationship('Restaurant', backref=db.backref('reviews', lazy=True))

    def __init__(self, restaurant_id,user_id, comment, rating):
        self.restaurant_id = restaurant_id
        self.comment = comment
        self.rating = rating
        self.user_id=user_id

    def __repr__(self):
        return f'{self.rating}, {self.comment}>'