from sqlalchemy.orm import relationship
from restaurant_app.extensions import db


from datetime import datetime



class Payment(db.Model):
    __tablename__ = "payments"  
    
    id = db.Column(db.Integer, primary_key=True)
    
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'), nullable=False)

    amount = db.Column(db.Integer,nullable=False)
    payment_date= db.Column(db.String(255),nullable=False)
    payment_method= db.Column(db.String(255),nullable=False)
    # transaction_id= db.Column(db.String(50),nullable=False)
    status=db.Column(db.String(255),nullable=False,default='completed')
    created_at = db.Column(db.DateTime, default=datetime.now())  
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    # user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'))

    from restaurant_app.models.user import User
    # users = db.relationship("User", backref="books")  # Define the relationship with the User model
    # companies = relationship("Company", backref="books")
    

    # company = db.relationship('Company', backref=db.backref("books", lazy=True))
    


    def __init__(self,restaurant_id,name, description):
        self.restaurant_id = restaurant_id
        self.name=name
        self.description = description
       
        
        

    def __repr__(self):
        return f'{self.payment_date},{self.payment_method}>'
