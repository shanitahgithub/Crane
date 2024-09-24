from flask import Blueprint,request,jsonify
from restaurant_app.models.menu import Menu,db
from restaurant_app.models.item import MenuItem
from restaurant_app.extensions import db,Bcrypt,JWTManager
from flask_jwt_extended import  create_access_token,create_refresh_token
from flask_jwt_extended import jwt_required, get_jwt_identity


# Creating a blueprint
menus = Blueprint('menus', __name__, url_prefix='/api/v2/menus')
bcrypt = Bcrypt()
jwt = JWTManager()

# Getting all menu categories
@menus.route('/categories', methods=['GET'])
def get_categories():
    try:
        categories = db.session.query(MenuItem.category).distinct().all()
        categories = [category[0] for category in categories if category[0]]  # Filter out empty categories if any
        return jsonify(categories)
    except Exception as e:
        return jsonify({'error': str(e)})
     
# Creating a menu
@menus.route('/create', methods=["POST"])
def create():
    try:
      
        restaurant_id = request.json.get("restaurant_id")
        category_name= request.json.get("category_name")
        # description = request.json.get("description")
        # price=request.json.get("price")
        image_url=request.json.get("image_url")
        
        

        # Validating input data
        if not restaurant_id:
            return jsonify({'error': "Restaurant_id is required"})
        if not category_name:
            return jsonify({'error': "Menu category_name  is required"})
        # if not description:
        #     return jsonify({'error': "Description is required"})
        # if not price:
        #     return jsonify({'error':"Price id required"})
        if not image_url:
            return jsonify({'error': "Image  is required"})
        

        # Creating a new instance of the Menu model
        
        new_menu = Menu(
            category_name=category_name,
            restaurant_id=restaurant_id,
            image_url=image_url
            
            
            
        )

        # Adding the new user instance to the database session
        db.session.add(new_menu)

        # Committing the session to save the changes to the database
        db.session.commit()
        # access_token = create_access_token(identity=email)

        # Returning a success response
        # return jsonify({'message': 'User created successfully', 'access_token': access_token}), 201
        return jsonify({'message': 'Menu created successfully',
                        'user':{
                            'restaurant_id':new_menu.restaurant_id,
                            'name':new_menu.category_name,
                           
                            
                            # 'description':new_menu.description,
                            #  'price':new_menu.price,
                             'image_url':new_menu.image_url,
                             'created_at': new_menu.created_at.isoformat(),
                            'updated_at': new_menu.updated_at.isoformat() if new_menu.updated_at else None
                            }}),201
                             

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)})
 
 
 # Editing a menu
@menus.route('/edit/<int:id>', methods=["PUT"])
def edit_menu(id):
    try:
        # Retrieve the menu item to edit
        menu_to_edit = Menu.query.get(id)
        if not menu_to_edit:
            return jsonify({'error': 'Menu item not found'}), 404

        # Extract menu data from the request JSON
        data = request.json

        # Update menu fields if provided in the request
        if 'name' in data:
            menu_to_edit.name = data['name']
       
        if 'description' in data:
            menu_to_edit.description = data['description']
        
        if 'price' in data:
            menu_to_edit.price = data['price']

        if 'image_url' in data:
            menu_to_edit.image_url = data['image_url']

        # Committing the session to save the changes to the database
        db.session.commit()

        # Returning a success response
        return jsonify({
            'message': 'Menu updated successfully',
            'menu': {
                'name': menu_to_edit.name,
                'description': menu_to_edit.description,
                'price': menu_to_edit.price,
                'image_url': menu_to_edit.image_url,
            }
        }), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500



#  Deleting a menu  
@menus.route('/delete/<int:id>', methods=["DELETE"])
@jwt_required()  # Ensure a valid JWT token is provided
def delete_menus(id):
    try:
        # Extract user_id from the JWT token
        user = get_jwt_identity()

        # Retrieve the user to delete
        menu_to_delete = Menu.query.filter_by(id=user).first()
        if not menu_to_delete:
            return jsonify({'error': 'User not found'}), 404

        
        # Deleting the menu
        db.session.delete(menu_to_delete)
        db.session.commit()

        return jsonify({'message': 'User deleted successfully'}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500



# Getting all menus
@menus.route('/allmenu', methods=["GET"])
 # Ensuring a valid JWT token is provided

def get_all_menus():
    try:
        # Querying all menu items from the database
        menus = Menu.query.all()

        # Serializing menu data
        serialized_menus = []
        for menu in menus:
            serialized_menu = {
                'id': menu.id,
                'name': menu.name,
                'description': menu.description,
                'price': menu.price,  # Ensure this attribute exists in your model
                'image_url': menu.image_url  # Ensure this attribute exists in your model
            }
            serialized_menus.append(serialized_menu)

        # Returning the serialized menu data
        return jsonify({'menus': serialized_menus}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
# Getting a specific menu
@menus.route('/user/<int:user_id>', methods=["GET"])
@jwt_required()  # Ensure a valid JWT token is provided
def get_menu(user_id):
    try:
        # Extract user_id from the JWT token
        user_id = get_jwt_identity()

        # Retrieving the menu
        menu = Menu.query.get(user_id)

        # Checking if the user exists
        if not menu:
            return jsonify({'error': 'User not found'}), 404

        
        # Serializing menu data
        serialized_menu= {
            'id': menu.id,
            'name': menu.name,
            
            'description': menu.description,
            
            
        }

        # Returning the serialized menu data
        return jsonify({'user': serialized_menu}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500   



