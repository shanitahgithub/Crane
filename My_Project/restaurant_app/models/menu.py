
from sqlalchemy.orm import relationship
from restaurant_app.extensions import db
from datetime import datetime

class Menu(db.Model):
    __tablename__ = "menus"  
    
    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer,db.ForeignKey('restaurant.id'), nullable=False)
    category_name= db.Column(db.String(100))
    
    # price=db.Column(db.Integer,nullable=False)
    # description= db.Column(db.String(255),nullable=False)
    image_url= db.Column(db.String(255), nullable=False)
    
    created_at = db.Column(db.DateTime, default=datetime.now())  
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())
    # user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    # user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'))
    menu_items=db.relationship('MenuItem',backref='menus',lazy=True)
    

    from restaurant_app.models.user import User
    # users = db.relationship("User", backref="books")  # Define the relationship with the User model
    # companies = relationship("Company", backref="books")
    

    # company = db.relationship('Company', backref=db.backref("books", lazy=True))
    

    def __init__(self,restaurant_id,category_name,image_url=None ):
        self.restaurant_id = restaurant_id
        self.category_name=category_name
       
        self.image_url=image_url
       
    
    def __repr__(self):
        return f'{self.name},{self.description}>'
