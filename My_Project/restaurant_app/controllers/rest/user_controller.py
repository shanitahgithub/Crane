from flask import Blueprint,request,jsonify
from restaurant_app.models.user import User,db
from restaurant_app.extensions import db,Bcrypt,JWTManager
from flask_jwt_extended import  create_access_token,create_refresh_token, decode_token
from flask_jwt_extended import jwt_required, get_jwt_identity
import datetime

# Creating a blueprint
users = Blueprint('users', __name__, url_prefix='/api/v2/users')
bcrypt = Bcrypt()
jwt = JWTManager()

# Defining the registration endpoint
@users.route('/register', methods=["POST"])
def register():
    try:
        # Extracting user data from the request JSON
        username = request.json.get("username")
        email = request.json.get("email")
        password = request.json.get("password")
        contact = request.json.get("contact")
        role = request.json.get("role")
        location=request.json.get("location")

        # Validating input data
        if not username:
            return jsonify({'error': "Your user_name is required"})
        if not email:
            return jsonify({'error': "Your email is required"})
        if not password:
            return jsonify({'error': "Your password is required"})
        if not contact:
            return jsonify({'error': "Your contact is required"})
        
        if not role == "customer" and not contact:
            return jsonify({'error': "Your contact is required"})
        
        if len(password) < 6:
            return jsonify({'error': "Your password must at least have 6 characters"})
        if User.query.filter_by(email=email).first():
            return jsonify({'error': "The email already exists"})
        existing_user = User.query.filter_by(password=password).first()
        if existing_user:
            return jsonify({'error': "A user with this password already exists"}), 409


        # Creating a new instance of the User model
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(
            username=username,
            email=email,
            password=hashed_password,
            contact=contact,  
            role=role,
            location=location
        )

        # Adding the new user instance to the database session
        db.session.add(new_user)

        # Committing the session to save the changes to the database
        db.session.commit()
        # access_token = create_access_token(identity=email)

        if new_user:
        # Returning a success response
        # return jsonify({'message': 'User created successfully', 'access_token': access_token}), 201
            return jsonify({'message': 'User created successfully',
                            'user':{
                                'username':new_user.username,
                                
                                'email':new_user.email,
                                'password':new_user.password,
                                'contact':new_user.contact,
                                'role':new_user.role}}),201
                             

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)})
    
    
# Logging in a User
@users.route('/login', methods=["POST"])
def login():
    try:
        # Extracting email and password from the request JSON
        data = request.json
        email = data.get("email")
        password = data.get("password")

        # Retrieving the user by email
        user = User.query.filter_by(email=email).first()

        # Checking if the user exists and the password is correct
        if user and bcrypt.check_password_hash(user.password, password):
            # Generating an access token for the user
            # access_token = create_access_token(identity=str(user.id))
            
            access_token = create_access_token(identity=str(user.id), expires_delta=datetime.timedelta(minutes=600))
            
            # refresh_token=create_refresh_token(identity=str(user.id))

            # Returning a success response with access token
            return jsonify({
                'message': 'Login successful',
                'user_id': user.id,
                'access_token': access_token,
                'username':user.username,
                'email':user.email,
                
                # 'refresh':refresh_token
                
            }), 200
        else:
            # Returning an error response if authentication fails
            return jsonify({'error': 'Invalid email or password'}), 401

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
    
# Editing a User 
@users.route('/edit/<int:id>', methods=["PUT"])
@jwt_required()  # Ensure a valid JWT token is provided
def edit_users(id):
    try:
        # Extract user_id from the JWT token
        user = get_jwt_identity()

        # Retrieve the user to edit
        data = request.json
        user_to_edit= User.query.filter_by(id=user).first()
        if not user_to_edit:
            return jsonify({'error': 'You have no access to this user'}), 404

        # Extract user data from the request JSON
        data = request.json

        # Update user fields if provided in the request
        if 'user_name' in data:
            user_to_edit.user_name = data['user_name']
       
        if 'email' in data:
            user_to_edit.email = data['email']
        if 'password' in data:
            user_to_edit.password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        if 'role' in data:
            user_to_edit.role_type = data['role']
        if 'contact' in data:
            user_to_edit.contact = data['contact']

        # Committing the session to save the changes to the database
        db.session.commit()

        # Returning a success response
        return jsonify({'message': 'User updated successfully',
                        'user':{
                            'user_name':user_to_edit.user_name,
                           
                            'email':user_to_edit.email,
                            
                            'role':user_to_edit.role,
                            'password':user_to_edit.password,
                            'contact':user_to_edit.contact}}), 201
 

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
    
#  Deleting User   
@users.route('/delete/<int:id>', methods=["DELETE"])
@jwt_required()  # Ensure a valid JWT token is provided
def delete_user(id):
    try:
        # Extract user_id from the JWT token
        user = get_jwt_identity()

        # Retrieve the user to delete
        user_to_delete = User.query.filter_by(id=user).first()
        if not user_to_delete:
            return jsonify({'error': 'User not found'}), 404

        
        # Deleting the user
        db.session.delete(user_to_delete)
        db.session.commit()

        return jsonify({'message': 'User deleted successfully'}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

#  Getting all users
@users.route('/users', methods=["GET"])
@jwt_required()  # Ensuring a valid JWT token is provided
def get_all_users():
    try:
        # Extracting user_id from the JWT token
        
        user_id = get_jwt_identity()
        if not user_id:
            return jsonify({"error": "Unauthorized"}), 401

        
        # Querying all users from the database
        users = User.query.all()

        # Serializing users data
        serialized_users = []
        for user in users:
            serialized_user = {
                'id': user.id,
                'user_name': user.username,
                
                'email': user.email,
               
                'location':user.location,
                'role': user.role,
                'contact': user.contact
            }
            serialized_users.append(serialized_user)

        # Returning the serialized users data
        return jsonify({'users': serialized_users}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Getting a specific user
@users.route('/user/<int:user_id>', methods=["GET"])
@jwt_required()  # Ensure a valid JWT token is provided
def get_user(user_id):
    try:
        # Extract user_id from the JWT token
        user_id = get_jwt_identity()

        # Retrieving the user
        user = User.query.get(user_id)

        # Checking if the user exists
        if not user:
            return jsonify({'error': 'User not found'}), 404

        
        # Serializing user data
        serialized_user = {
            'id': user.id,
            'user_name': user.user_name,
            
            'email': user.email,
            
            'role': user.role,
            'contact': user.contact
        }

        # Returning the serialized user data
        return jsonify({'user': serialized_user}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500   



@users.route('/refresh-token', methods=["POST"])
def refresh_token():
    refresh_token = request.json.get('refresh_token')

    try:
        # Decode and verify the refresh token
        decoded_token = decode_token(refresh_token)
        user_id = decoded_token['identity']

        # Generate a new access token
        access_token = create_access_token(identity=user_id, expires_delta=datetime.timedelta(minutes=600))

        return jsonify({
            'access_token': access_token
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 401