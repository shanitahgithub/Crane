from flask import Flask
from restaurant_app.extensions import db
from datetime import datetime


class Restaurant(db.Model):
    __tablename__="restaurant"
    # Attributes of the Retaurant and its respective constraints  
    id = db.Column(db.Integer,primary_key= True)
    restaurant_name = db.Column(db.String(50), unique=True)
    description=db.Column(db.Text(255), nullable=False)
    address=db.Column(db.String(100),nullable=False)
    phone_number=db.Column(db.Integer,nullable=False)
    email   = db.Column(db.String(20), nullable=False , unique=True)
    opening_hours=db.Column(db.String(100),nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())  
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())
    
    
    
    # user_id= db.Column(db.Integer,db.ForeignKey('users.id'),nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.now())  
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())
    # user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)

    # user = db.relationship("User", backref="companies")
    # from authors_app.models.book import Book
    from sqlalchemy.orm import relationship 
    menus=db.relationship('Menu',backref='restaurant',lazy=True)
    reviews=db.relationship('Review',backref='restaurant',lazy=True)
    
    orders=db.relationship('Order',backref='restaurant',lazy=True)
    
    # user = db.relationship('User', backref='companies')
    # user = db.relationship("User", backref="companies")
    


    def __init__(self,restaurant_name,address,description,phone_number,email,opening_hours):
        self.restaurant_name=restaurant_name
        self.address=address
        self.description=description
        self.phone_number=phone_number
        self.email=email
        self.opening_hours=opening_hours       

    def __repr__(self):
         return f'{self.restaurant_name} {self.address}'

        

    