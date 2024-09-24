
from restaurant_app.models.restaurant import Restaurant
from restaurant_app.models.user import User
from flask import Blueprint, request, jsonify
from restaurant_app.models.restaurant import Restaurant, db
from restaurant_app.models.user import User
from flask_jwt_extended import jwt_required, get_jwt_identity
from restaurant_app.extensions import db,Bcrypt,JWTManager
from flask_jwt_extended import  create_access_token,create_refresh_token


restaurants = Blueprint('restaurants', __name__, url_prefix='/api/v2/restaurants')

# Endpoint for creating a restaurant
@restaurants.route('/register', methods=['POST'])
 # This decorator ensures that a valid JWT token is provided
def create_restaurant():
    try:
        # Extracting request data
        restaurant_name = request.json.get('restaurant_name')
        address= request.json.get('address')
        description = request.json.get('description')
        phone_number= request.json.get('phone_number')
        email= request.json.get('email')
        opening_hours = request.json.get('opening_hours')
        
        # Debugging: Printing the token identity
        # current_user_id = get_jwt_identity()
        # print("Token Identity:", current_user_id)

        # You can get user_id from the access token instead of sending it in the request
        # user_id = current_user_id  # Using the user ID extracted from the token
        
        # Basic input validation
        if not restaurant_name:
            return jsonify({"error": 'Restaurant name is required'}), 400

        if not email:
            return jsonify({"error": 'Email is required'}), 400
        
        if not opening_hours:
            return jsonify({"error": 'Opening hours  are required'}), 400
        
        if not address:
            return jsonify({"error": 'Address  is required'}), 400
        
        if not phone_number:
            return jsonify({"error": 'Phone number  is required'}), 400

        if not description:
            return jsonify({"error": 'Restaurant description is required'}), 400
        
        if Restaurant.query.filter_by(restaurant_name=restaurant_name).first():
            return jsonify({"error":'Restaurant already exists'})

        # Creating a new company associated with the user
        new_restaurant= Restaurant(
            restaurant_name=restaurant_name,
            address=address,
            description=description,
            phone_number=phone_number,
            # user_id=user_id,
            email=email,
            opening_hours=opening_hours
        )

        # Adding the new company to the session
        db.session.add(new_restaurant)
        
        # Committing the changes to the database
        db.session.commit()

        # Building a response message
        message = f" '{new_restaurant.restaurant_name}' restaurant has been  has been successfully created"
        return jsonify({"message": message,
                     'restaurant':{
                         'restaurant_id':new_restaurant.id,
                         'restaurant_name':new_restaurant.restaurant_name,
                         'address':new_restaurant.address,
                         'description':new_restaurant.description,
                         'phone_number':new_restaurant.phone_number,
                         'email':new_restaurant.email,
                         'opening_hours':new_restaurant.opening_hours,
                         } }), 201

    except Exception as e:
        # Rolling back the session in case of an error
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
  
# Editing a restaurant
@restaurants.route('/edit/<int:id>', methods=["PUT"])
  # Ensuring a valid JWT token is provided
def edit_restaurant(id):
    try:
        # Extracting user_id from the JWT token
        user= get_jwt_identity()

        # Extracting company data from the request JSON
        data = request.json
        restaurant= Restaurant.query.filter_by(id=id,user_id=user).first()
        if not restaurant:
            return jsonify({'error': 'You have no access to this Restaurant'}), 404

        # Updating company fields 
        if 'restarant_name' in data:
            restaurant.name = data['restaurant_name']
        if 'description' in data:
            restaurant.description = data['description']
        if 'address' in data:
            restaurant.description = data['address']
            
        if 'email' in data:
            restaurant.description = data['email']
            
        if 'opening_hours' in data:
            restaurant.description = data['opening_hours']
            
        
        if 'phone_number' in data:
            restaurant.description = data['phone_number']
            
        
            
        
        
    
        
         # Committing the session to save the changes to the database
        db.session.commit()

        # Returning a success response
        return jsonify({'message': 'Restaurant has been updated successfully',
                        'restaurant':{
                         'restaurant_name':restaurant.restaurant_name,
                         'address':restaurant.address,
                         'description':restaurant.description,
                         'opening_hours':restaurant.opening_hours,
                         'email':restaurant.email,
                         'phone_number':restaurant.phone_number
                         } }), 200
        

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500 
    
# Deleting a restaurant
@restaurants.route('/delete/<int:id>', methods=["DELETE"])
# @jwt_required()  # Ensuring a valid JWT token is provided
def delete_restaurant(id):
    try:
        # Extracting user_id from the JWT token
        user= get_jwt_identity()

        # Retrieving the company to delete
        restaurants= Restaurant.query.filter_by(id=id,user_id=user).first()
        if not restaurants:
            return jsonify({'error': 'You have no access to this Restaurant'}), 404

        # Deleting the company
        db.session.delete(restaurants)
        db.session.commit()

        return jsonify({'message': 'Restaurant has been deleted successfully'}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# Getting a specific restaurant
@restaurants.route('/restaurant/<int:id>', methods=["GET"])
@jwt_required()  # Ensuring a valid JWT token is provided
def get_restaurant(id):
    try:
        # Extracting  user_id from the JWT token
        user = get_jwt_identity()

        # Retrievig the user
        
        restaurants= Restaurant.query.filter_by(id=id,user_id=user).first()
        

        # Checking if the company exists
        if not restaurants:
            return jsonify({'error': 'You have no access to this restaurant'}), 404

        
        # Serializing company data
        serialized_restaurant= {
                'id': restaurants.id,
                'restaurant_name': restaurants.restaurants_name,
                'address': restaurants.address,
                'description': restaurants.description,
                'phone_number':restaurants.phone_number,
                'opening_hours':restaurants.opening_hours,
                'email':restaurants.email                
        }

        # Returning the serialized company data
        return jsonify({'restaurant': serialized_restaurant}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500   

# Getting all restaurants
@restaurants.route('/allRestaurants', methods=["GET"])
@jwt_required()  # Ensuring a valid JWT token is provided
def get_all_restaurants():
    try:
        # Extracting user_id from the JWT token
        user_id = get_jwt_identity()
        if not user_id:
            return jsonify({"error": "Unauthorized"}), 401


        # Querying all companies from the database
        allCompanies = Restaurant.query.all()

        # Serializing company data
        serialized_allRestaurants = []
        for restaurants in serialized_allRestaurants:
            serialized_restaurants= {
                'id': restaurants.id,
                'company_name': restaurants.company_name,
                'address': restaurants.address,
                'description': restaurants.description,
                'email':restaurants.email,
                'user_id': restaurants.user_id,
                'opening_hours':restaurants.opening_hours,
                'phone_number':restaurants.phone_number,

            }
            serialized_allRestaurants.append(serialized_restaurants)

        # Returning the serialized company data
        return jsonify({'companies': serialized_allRestaurants}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500
   
 

    


