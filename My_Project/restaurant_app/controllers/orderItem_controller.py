# from flask import Blueprint,request,jsonify
# from restaurant_app.models.menu import Menu,db
# from restaurant_app.extensions import db,Bcrypt,JWTManager
# from flask_jwt_extended import  create_access_token,create_refresh_token
# from flask_jwt_extended import jwt_required, get_jwt_identity

# review_bp = Blueprint('review_bp', __name__, url_prefix='/api/v2/review_bp')

# @review_bp.route('/create', methods=['POST'])
# def add_review():
#     data = request.get_json()
    
#     if not data:
#         return jsonify({'error': 'No JSON data received'}), 400
    
#     try:
#         restaurant_id = data['restaurant_id']
#         user_id = data['user_id']
#         rating = data['rating']
#         comment = data['comment']
#         name=data['name']
#     except KeyError as e:
#         return jsonify({'error': f'Missing required key: {e}'}), 400

#     new_review = Review(name=name,restaurant_id=restaurant_id, user_id=user_id, rating=rating, comment=comment)
#     db.session.add(new_review)
#     db.session.commit()

#     return jsonify({'message': 'Review added successfully'}), 201

# @review_bp.route('/fetch', methods=['POST'])
# def fetch_reviews():
#     data = request.get_json()
#     restaurant_id = data.get('restaurant_id')
#     reviews = Review.query.filter_by(restaurant_id=restaurant_id).all()
#     reviews_list = [
#         {
#             'id': review.id,
#             'restaurant_id': review.restaurant_id,
#             'rating': review.rating,
#             'comment': review.comment,
#             'name':review.name,
#             'created_at': review.created_at,
#             'updated_at': review.updated_at
#         } for review in reviews
#     ]
#     return jsonify(reviews_list)

# @review_bp.route('/<int:restaurant_id>/reviews', methods=['GET'])
# def get_reviews(restaurant_id):
#     reviews = Review.query.filter_by(restaurant_id=restaurant_id).all()
#     review_list = [{'name': review.name, 'rating': review.rating, 'comment': review.comment, 'created_at': review.created_at} for review in reviews]
#     return jsonify(review_list), 200

# @review_bp.route('/<int:restaurant_id>/reviews', methods=['GET'])
# def get_reviews(restaurant_id):
#     reviews = Review.query.filter_by(restaurant_id=restaurant_id).all()
#     review_list = [
#         {
#             'name': review.name,
#             'rating': review.rating,
#             'comment': review.comment,
#             'created_at': review.created_at
#         } for review in reviews
#     ]
#     return jsonify(review_list), 200


# # Creating a blueprint
# menus = Blueprint('menus', __name__, url_prefix='/api/v2/menus')
# bcrypt = Bcrypt()
# jwt = JWTManager()

# # Defining the registration endpoint
# @menus.route('/register', methods=["POST"])
# def register():
#     try:
#         # Extracting user data from the request JSON
#         restaurant_id = request.json.get("restaurant_id")
#         name= request.json.get("name")
#         description = request.json.get("description")
        
        

#         # Validating input data
#         if not restaurant_id:
#             return jsonify({'error': "Restaurant_id is required"})
#         if not name:
#             return jsonify({'error': "Menu name  is required"})
#         if not description:
#             return jsonify({'error': "Description is required"})
        

#         # Creating a new instance of the User model
        
#         new_menu = Menu(
#             name=name,
#             restaurant_id=restaurant_id,
#             description=description,
            
            
            
#         )

#         # Adding the new user instance to the database session
#         db.session.add(new_menu)

#         # Committing the session to save the changes to the database
#         db.session.commit()
#         # access_token = create_access_token(identity=email)

#         # Returning a success response
#         # return jsonify({'message': 'User created successfully', 'access_token': access_token}), 201
#         return jsonify({'message': 'User created successfully',
#                         'user':{
#                             'name':new_menu.name,
#                             'restaurant_id':new_menu.restaurant_id,
                            
#                             'description':new_menu.description,
#                             }}),201
                             

#     except Exception as e:
#         db.session.rollback()
#         return jsonify({'error': str(e)})
    
    


    
# # Editing a User 
# @menus.route('/edit/<int:id>', methods=["PUT"])
# @jwt_required()  # Ensure a valid JWT token is provided
# def edit_menu(id):
#     try:
#         # Extract user_id from the JWT token
#         user = get_jwt_identity()

#         # Retrieve the user to edit
#         data = request.json
#         menu_to_edit= Menu.query.filter_by(id=user).first()
#         if not menu_to_edit:
#             return jsonify({'error': 'You have no access to this menu'}), 404

#         # Extract user data from the request JSON
#         data = request.json

#         # Update user fields if provided in the request
#         if 'name' in data:
#             menu_to_edit.name = data['name']
       
#         if 'description' in data:
#             menu_to_edit.email = data['description']
        

#         # Committing the session to save the changes to the database
#         db.session.commit()

#         # Returning a success response
#         return jsonify({'message': 'Menu updated successfully',
#                         'menu':{
#                             'name':menu_to_edit.name,
                           
#                             'description':menu_to_edit.description}}), 201
 

#     except Exception as e:
#         db.session.rollback()
#         return jsonify({'error': str(e)}), 500
    
# #  Deleting User   
# @menus.route('/delete/<int:id>', methods=["DELETE"])
# @jwt_required()  # Ensure a valid JWT token is provided
# def delete_menus(id):
#     try:
#         # Extract user_id from the JWT token
#         user = get_jwt_identity()

#         # Retrieve the user to delete
#         menu_to_delete = Menu.query.filter_by(id=user).first()
#         if not menu_to_delete:
#             return jsonify({'error': 'User not found'}), 404

        
#         # Deleting the user
#         db.session.delete(menu_to_delete)
#         db.session.commit()

#         return jsonify({'message': 'User deleted successfully'}), 200

#     except Exception as e:
#         db.session.rollback()
#         return jsonify({'error': str(e)}), 500

# #  Getting all users
# @menus.route('/users', methods=["GET"])
# @jwt_required()  # Ensuring a valid JWT token is provided
# def get_all_menus():
#     try:
#         # Extracting user_id from the JWT token
        
#         user_id = get_jwt_identity()
#         if not user_id:
#             return jsonify({"error": "Unauthorized"}), 401

        
#         # Querying all users from the database
#         menu = Menu.query.all()

#         # Serializing users data
#         serialized_menus = []
#         for user in menu:
#             serialized_menus = {
#                 'id': menu.id,
#                 'name': menu.name,
                
#                 'description': menu.description,
               
                
                
#             }
#             serialized_menus.append(serialized_menus)

#         # Returning the serialized users data
#         return jsonify({'users': serialized_menus}), 200

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

# # Getting a specific user
# @menus.route('/user/<int:user_id>', methods=["GET"])
# @jwt_required()  # Ensure a valid JWT token is provided
# def get_menu(user_id):
#     try:
#         # Extract user_id from the JWT token
#         user_id = get_jwt_identity()

#         # Retrieving the menu
#         menu = Menu.query.get(user_id)

#         # Checking if the user exists
#         if not menu:
#             return jsonify({'error': 'User not found'}), 404

        
#         # Serializing user data
#         serialized_menu= {
#             'id': menu.id,
#             'name': menu.name,
            
#             'description': menu.description,
            
            
#         }

#         # Returning the serialized user data
#         return jsonify({'user': serialized_menu}), 200

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500   



