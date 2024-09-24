from flask import Flask
from restaurant_app.extensions import db
from datetime import datetime



class User(db.Model):
    __tablename__="users"
    # Attributes of the Users and their respective constraints  
    id = db.Column(db.Integer,primary_key= True)
    username = db.Column(db.String(200), nullable=False)
    location = db.Column(db.String(200), nullable=False)
    email   = db.Column(db.String(255), nullable=False , unique=True)
    password = db.Column(db.Text(255), nullable=False )
    contact  =db.Column(db.String(255), nullable=False)
    role=db.Column(db.String(20),nullable=False,default='customer')
    created_at = db.Column(db.DateTime, default=datetime.now())  
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())
    
    
    orders=db.relationship('Order',backref='users',lazy=True)
    reviews=db.relationship('Review',backref='users',lazy=True)
    # payments=db.relationship('Payment',backref='users',lazy=True)
    contacts = db.relationship('Contact', backref='users', lazy=True)
    
# Creating a constructor for the user model
    
    def __init__(self,username,location,password,role,contact,email):
        self.username=username
        self.email= email
        self.contact= contact
        self.password=password
        self.role=role
        self.location=location
        

    def get_full_name(self):
        return f'{self.username} {self.email}'




































    
    







       

