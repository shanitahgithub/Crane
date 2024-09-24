from sqlalchemy.orm import relationship
from restaurant_app.extensions import db
from datetime import datetime

class Contact(db.Model):
    __tablename__ = 'contacts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    username=db.Column(db.String(200), nullable=False)
    # password=db.Column(db.String(200), nullable=True)
    # role=db.Column(db.String(200), nullable=True)
    # contact=db.Column(db.String(200), nullable=True)
    email=db.Column(db.String(255), nullable=False)
    subject = db.Column(db.String(255), nullable=False)
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, onupdate=datetime.now)
    
    
    
    # users = db.relationship('User', backref='contacts', lazy=True)
    # contacts = db.relationship('Contact', backref='users', lazy=True)

    def __init__(self, user_id, username,email,subject, message):
        self.user_id = user_id
        self.subject = subject
        self.message = message
        self.username=username
        self.email=email
        # self.role=role
        # self.passw=password
        # self.contact=contact



    def __repr__(self):
        return f'<Contact {self.id}>'
    
    