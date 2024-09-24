from flask import Flask
from flask import Blueprint,request,jsonify
# from restaurant_app.models.menu import Menu,db
from restaurant_app.extensions import db,Bcrypt,JWTManager
from flask_jwt_extended import  create_access_token,create_refresh_token
from flask_jwt_extended import jwt_required, get_jwt_identity
from restaurant_app.models.review import Review


review_bp = Blueprint('review_bp', __name__, url_prefix='/api/v2/review_bp')

# Creating reviews
@review_bp.route('/create', methods=['POST'])
def add_review():
    data = request.get_json()
    
    if not data:
        return jsonify({'error': 'No JSON data received'}), 400
    
    try:
        restaurant_id = data['restaurant_id']
        user_id = data['user_id']
        rating = data['rating']
        comment = data['comment']
    except KeyError as e:
        return jsonify({'error': f'Missing required key: {e}'}), 400

    new_review = Review(restaurant_id=restaurant_id, user_id=user_id, rating=rating, comment=comment)
    db.session.add(new_review)
    db.session.commit()

    return jsonify({'message': 'Review added successfully'}), 201


# Fetching reviews
@review_bp.route('/fetch', methods=['POST'])
def fetch_reviews():
    data = request.get_json()
    restaurant_id = data.get('restaurant_id')
    reviews = Review.query.filter_by(restaurant_id=restaurant_id).all()
    reviews_list = [
        {
            'id': review.id,
            'restaurant_id': review.restaurant_id,
            'rating': review.rating,
            'comment': review.comment,
            
            'created_at': review.created_at,
            'updated_at': review.updated_at
        } for review in reviews
    ]
    return jsonify(reviews_list)
