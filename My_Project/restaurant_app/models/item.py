from sqlalchemy.orm import relationship
from restaurant_app.extensions import db
from datetime import datetime

class MenuItem(db.Model):
    __tablename__ = "items"
    
    id = db.Column(db.Integer, primary_key=True)
    menu_id = db.Column(db.Integer, db.ForeignKey('menus.id'), nullable=False)
    image = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    price = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    
    created_at = db.Column(db.DateTime, default=datetime.now)  
    updated_at = db.Column(db.DateTime, onupdate=datetime.now)
    
    # Define relationship with OrderItem
    order_items = relationship('OrderItem', back_populates='menu_item')

    def __init__(self, menu_id, name, description, price, category, image=None):
        self.menu_id = menu_id
        self.name = name
        self.description = description
        self.price = price
        self.category = category
        self.image = image

    def __repr__(self):
        return f'<MenuItem {self.name}, {self.description}>'
    
    
    def to_dict(self):
        return {
            'id': self.id,
            'menu_id': self.menu_id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'category': self.category,
            'image': self.image,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
