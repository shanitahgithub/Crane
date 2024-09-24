from sqlalchemy.orm import relationship
from restaurant_app.extensions import db


from datetime import datetime



class Transaction(db.Model):
    __tablename__ = "transactions"  
    
    id = db.Column(db.Integer, primary_key=True)
    orderItem_id = db.Column(db.Integer, db.ForeignKey('order_item.id'),nullable=False)
    status= db.Column(db.String(255),nullable=False)
    transaction_amount= db.Column(db.Integer,nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())  
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())
    
    # user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'))

    from restaurant_app.models.user import User
    order_item = db.relationship('OrderItem', backref='transactions',lazy=True)
    user = db.relationship('User', backref='transactions',lazy=True)
    # users = db.relationship("User", backref="books")  # Define the relationship with the User model
    # companies = 
    # relationship("Company", backref="books")
    

    # company = db.relationship('Company', backref=db.backref("books", lazy=True))
    


    def __init__(self,orderItem_id,status, transaction_amount):
        self.orderItem_id = orderItem_id
        self.status=status
        self.transaction_amount = transaction_amount
        
        
        

    def __repr__(self):
        return f'{self.status},{self.transaction_amount}>'
