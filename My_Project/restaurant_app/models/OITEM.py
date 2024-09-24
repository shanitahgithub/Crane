from sqlalchemy.orm import relationship
from restaurant_app.extensions import db


from datetime import datetime


class OrderItem(db.Model):
    __tablename__ = "order_item"
    
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey('items.id'), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    total_amount = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)  
    updated_at = db.Column(db.DateTime, onupdate=datetime.now)
    
    # Define relationship with MenuItem
    menu_item = relationship('MenuItem', back_populates='order_items')

    def __init__(self, order_id, item_id, quantity, price):
        self.order_id = order_id
        self.item_id = item_id
        self.quantity = quantity
        self.price = price
        self.total_amount = quantity * price  # Assuming total_amount is quantity * price

    def __repr__(self):
        return f'<OrderItem {self.quantity}, {self.price}>'