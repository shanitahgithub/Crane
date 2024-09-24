# from flask import Blueprint,request,jsonify
# from restaurant_app.models. import MenuItem,db
# from restaurant_app.extensions import db,Bcrypt,JWTManager
# from flask_jwt_extended import  create_access_token,create_refresh_token
# from flask_jwt_extended import jwt_required, get_jwt_identity


# # Creating a blueprint
# menuitem = Blueprint('menuitem', __name__, url_prefix='/api/v2/menuitem')
# bcrypt = Bcrypt()
# jwt = JWTManager()

# # Defining the registration endpoint
# @menuitem.route('/register', methods=["POST"])
# def register():
#     try:
#         # Extracting user data from the request JSON
#         menu_id = request.json.get("menu_id")
#         name= request.json.get("name")
#         description = request.json.get("description")
#         price= request.json.get("price")
#         category= request.json.get("category")
        
        
        

#         # Validating input data
#         if not menu_id:
#             return jsonify({'error': "Menu_id is required"})
#         if not name:
#             return jsonify({'error': "MenuItem name  is required"})
#         if not description:
#             return jsonify({'error': "Description is required"})
#         if not price:
#             return jsonify({'error': "Price  is required"})
#         if not category:
#             return jsonify({'error': "Category  is required"})

#         # Creating a new instance of the User model
        
#         new_menuitem = MenuItem(
#             name=name,
#             menu_id=menu_id,
#             description=description,
#             price=price,
#             category=category
            
            
            
#         )

#         # Adding the new user instance to the database session
#         db.session.add(new_menuitem)

#         # Committing the session to save the changes to the database
#         db.session.commit()
#         # access_token = create_access_token(identity=email)

#         # Returning a success response
#         # return jsonify({'message': 'User created successfully', 'access_token': access_token}), 201
#         return jsonify({'message': 'User created successfully',
#                         'menuitem':{
#                             'name':new_menuitem.name,
#                             'price':new_menuitem.price,
#                             'menu_id':new_menuitem.menu_id,
#                             'category':new_menuitem.category,
#                             'description':new_menuitem.description,
#                             }}),201
                             

#     except Exception as e:
#         db.session.rollback()
#         return jsonify({'error': str(e)})
    
    


    
# # Editing a User 
# @menuitem.route('/edit/<int:id>', methods=["PUT"])
# @jwt_required()  # Ensure a valid JWT token is provided
# def edit_menuitem(id):
#     try:
#         # Extract user_id from the JWT token
#         user = get_jwt_identity()

#         # Retrieve the user to edit
#         data = request.json
#         menuitem_to_edit= MenuItem.query.filter_by(id=user).first()
#         if not menuitem_to_edit:
#             return jsonify({'error': 'You have no access to this menuitem'}), 404

#         # Extract user data from the request JSON
#         data = request.json

#         # Update user fields if provided in the request
#         if 'name' in data:
#             menuitem_to_edit.name = data['name']
       
#         if 'description' in data:
#             menuitem_to_edit.email = data['description']
            
#         if 'price' in data:
#             menuitem_to_edit.name = data['price']
#         if 'category' in data:
#             menuitem_to_edit.name = data['category']
        

#         # Committing the session to save the changes to the database
#         db.session.commit()

#         # Returning a success response
#         return jsonify({'message': 'Menu updated successfully',
#                         'menuitem':{
#                             'name':menuitem_to_edit.name,
                           
#                             'description':menuitem_to_edit.description,
#                             'menu_id':menuitem_to_edit.menu_id,
#                             'category':menuitem_to_edit.category}}), 201
 

#     except Exception as e:
#         db.session.rollback()
#         return jsonify({'error': str(e)}), 500
    
# #  Deleting User   
# @menuitem.route('/delete/<int:id>', methods=["DELETE"])
# @jwt_required()  # Ensure a valid JWT token is provided
# def delete_menuitem(id):
#     try:
#         # Extract user_id from the JWT token
#         user = get_jwt_identity()

#         # Retrieve the user to delete
#         menuitem_to_delete = MenuItem.query.filter_by(id=user).first()
#         if not menuitem_to_delete:
#             return jsonify({'error': 'Menuitem not found'}), 404

        
#         # Deleting the user
#         db.session.delete(menuitem_to_delete)
#         db.session.commit()

#         return jsonify({'message': 'MenuItem deleted successfully'}), 200

#     except Exception as e:
#         db.session.rollback()
#         return jsonify({'error': str(e)}), 500

# #  Getting all users
# # @menuitem.route('/menuitem', methods=["GET"])
# # @jwt_required()  # Ensuring a valid JWT token is provided
# # def get_all_menuitem():
# #     try:
# #         # Extracting user_id from the JWT token
        
# #         user_id = get_jwt_identity()
# #         if not user_id:
# #             return jsonify({"error": "Unauthorized"}), 401

        
# #         # Querying all users from the database
# #         menuitems = MenuItem.query.all()

# #         # Serializing users data
# #         serialized_menuitems= []
# #         for menu in menuitems:
# #             serialized_menuitems = {
# #                 'id': menuitems.id,
# #                 'name': menuitems.name,
                
# #                 'description': menuitems.description,
# #                 'price':menuitems.price,
# #                 'category':menuitems.category
               
                
                
# #             }
# #             serialized_menuitems.append(serialized_menuitems)

# #         # Returning the serialized users data
# #         return jsonify({'users': serialized_menuitems}), 200

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

# # Getting a specific user
# @menuitem.route('/user/<int:user_id>', methods=["GET"])
# @jwt_required()  # Ensure a valid JWT token is provided
# def get_menu(user_id):
#     try:
#         # Extract user_id from the JWT token
#         user_id = get_jwt_identity()

#         # Retrieving the menu
#         menu = MenuItem.query.get(user_id)

#         # Checking if the user exists
#         if not menu:
#             return jsonify({'error': 'User not found'}), 404

        
#         # Serializing user data
#         serialized_menu= {
#             'id': menuitem.id,
#             'name': menuitem.name,
            
#             'description': menuitem.description,
#             'price':menuitem.price,
#             'category':menuitem.category
            
            
#         }

#         # Returning the serialized user data
#         return jsonify({'user': serialized_menu}), 200

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500   



