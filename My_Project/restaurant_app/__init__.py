

from restaurant_app.controllers.rest.user_controller import users
from restaurant_app.controllers.rest.itemscontroller import item_bp
from restaurant_app.controllers.rest.reviewscontroller import review_bp
from restaurant_app.controllers.rest.contacts_controller import contact_bp
from restaurant_app.controllers.rest.menu_controller import menus
from restaurant_app.controllers.rest.restaurant_controller import restaurants
from restaurant_app.controllers.order_contoller import order1
import os
import json
from restaurant_app.controllers.rest.restaurant_controller import restaurants
from flask import Flask,jsonify,Blueprint
from flask_cors import CORS
from restaurant_app.models.menu import Menu
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from restaurant_app.extensions import migrate,bcrypt,jwt
from restaurant_app.extensions import db
from flask_jwt_extended import get_jwt_identity,jwt_required
from flask_mail import Mail
from restaurant_app.extensions import mail



# Application Factory Function enable us to work with multiple instances
# The app instance is created under the function def create_app():

 
def create_app():
    app = Flask(__name__)
    CORS(app)
    
    app.config.from_object('config.Config') 
    
    
    mail.init_app(app)


    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    jwt.init_app(app)
    
    from restaurant_app.models import user
    from restaurant_app.models import restaurant
    from restaurant_app.models import menu
    from restaurant_app.models import item
    from restaurant_app.models import OITEM
    from restaurant_app.models import review
    from restaurant_app.models import order
    from restaurant_app.models import payment
    from restaurant_app.models import transaction
    from restaurant_app.models import contacts
    
    
    
    @app.route('/')
    def home():
        return "WELCOME TO MY RESTAURANT API"
    
    from restaurant_app.controllers.rest.user_controller import users
    from restaurant_app.controllers.rest.restaurant_controller import restaurants
    from restaurant_app.controllers.rest.menu_controller import menus

    app.register_blueprint(users, url_prefix='/api/v2/users')
    app.register_blueprint(item_bp,url_prefix='/api/v2/item_bp')
    app.register_blueprint(review_bp)
    app.register_blueprint(order1)
    app.register_blueprint(contact_bp, url_prefix='/api/v2/contact_bp')
    app.register_blueprint(restaurants, url_prefix='/api/v2/restaurants')
    app.register_blueprint(menus, url_prefix='/api/v2/menus')
    
    return app
   



# This is shanitah
