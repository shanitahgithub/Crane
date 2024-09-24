from sqlalchemy.orm import relationship
from restaurant_app.extensions import db


from datetime import datetime

class Order(db.Model):
    __tablename__ = "orders"  
    
    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurant.id'),nullable=False)
    # payment_id = db.Column(db.Integer, db.ForeignKey('payments.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey('items.id'), nullable=False)
    order_date= db.Column(db.String(255),nullable=False)
    quantity= db.Column(db.Integer,nullable=False)
    status=db.Column(db.String(100),nullable=False)
    deliveryInformation=db.Column(db.Text,nullable=False)
   
    total_amount=db.Column(db.String(200),nullable=False)
    # payment_method=db.Column(db.String(100),nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())  
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())
    # user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    from restaurant_app.models.user import User
    
    payments = db.relationship('Payment', backref='orders', lazy=True)
    item = db.relationship('MenuItem', backref='orders')
    # restaurant = db.relationship('Restaurant', backref='orders')
    # user = db.relationship('User', backref='orders')
    # payment = db.relationship('Payment', backref='orders')

    # payment=db.relationship('Payment',uselist=False,backref='order')
   

    # company = db.relationship('Company', backref=db.backref("books", lazy=True))
    
    def __init__(self,restaurant_id,deliveryInformation,user_id,item_id,quantity,order_date,total_amount,status,):
        self.restaurant_id=restaurant_id
        self.quantity=quantity
        self.order_date = order_date
        self.total_amount=total_amount
        self.status=status
        self.item_id=item_id
        self.user_id=user_id
        self.deliveryInformation=deliveryInformation
       

    def __repr__(self):
        return f'{self.order_date},{self.total_amount}>'
