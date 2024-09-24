

from flask import Blueprint,request,jsonify,current_app
from restaurant_app.models.order import Order,db
from restaurant_app.models.item import MenuItem
from restaurant_app.models.user import User
from restaurant_app.extensions import db,mail,Message
from flask_jwt_extended import  create_access_token,create_refresh_token
from flask_jwt_extended import jwt_required, get_jwt_identity
from datetime import datetime

# Creating a blueprint
order1 = Blueprint('order1', __name__, url_prefix='/api/v2/order1')

@order1.route('/orders', methods=['POST'])
@jwt_required()  # This decorator ensures the endpoint is protected
def create_order():
    
    try:
        # Get JSON data from the request
        data = request.get_json()

        # Logging received data
        print(f"Received data: {data}")

        # Extract and validate data from the request
        required_fields = ['restaurant_id','deliveryInformation', 'quantity', 'total_amount', 'status', 'item_id']
        for field in required_fields:
            if field not in data:
                return jsonify({"message": f"'{field}' is required.", "error": "Validation error"}), 400

        restaurant_id = data['restaurant_id']
        quantity = data['quantity']
        order_date = data.get('order_date', datetime.utcnow().isoformat())
        total_amount = data['total_amount']
        status = data['status']
        item_id = data['item_id']
        deliveryInformation=data['deliveryInformation']
        user_id = get_jwt_identity()  # Get the current user's ID from the JWT

        # Check if the item exists
        item = MenuItem.query.get(item_id)
        if not item:
            return jsonify({"message": "Item does not exist", "error": "Validation error"}), 400

        # Create a new Order object
        # Create a new order
        new_order = Order(
            restaurant_id=restaurant_id,
            quantity=quantity,
            order_date=order_date,
            total_amount=total_amount,
            status=status,
            item_id=item_id,
            user_id=user_id,
            deliveryInformation=deliveryInformation
        )

        # Add the new order to the session and commit
        db.session.add(new_order)
        db.session.commit()
        
        return send_email(new_order)
        
        # return jsonify({'message': 'Order created successfully',
        #                 'order':new_order.id
        #                     }), 201
 
        # return jsonify({"message": "Order created successfully!",
        #                 'order'}), 201

    except Exception as e:
        db.session.rollback()
        print(f"Error: {e}")
        return jsonify({"message": "An error occurred while creating the order.", "error": str(e)}), 500
    
    

# @order1.route('/send-mail', methods=['POST'])
# @jwt_required() 
def send_email(order):
    
    user = User.query.get(order.user_id)
    if not user:
            return jsonify({"messsage":"User not found"})
    try:
        recipients = [user.email, 'nakaggashanitah874@gmail.com']
        msg = Message(subject='Order Received! - Pals Food Court',
                    sender='nakaggashanitah874@gmail.com',
                    recipients=recipients)
        
              
        item = MenuItem.query.get(order.item_id)
        if not item:
            return jsonify({"message": "Item does not exist", "error": "Validation error"}), 400

       
        msg.html = f"""
            <html>
                <body>
                    <h1>New Order! </h1>
                    <hr>
                    ----------------------------
                    <h3>OrderID: #{order.id}<h3/>
                    <p>Item name: {item.name} </p>
                    <p>Amount: {order.total_amount}</p>
                    <p>Quantity: {order.quantity}</p>
                    -----------------------------------
                    <h3>User details<h3/>
                    <p>User name: {user.username} </p>
                    <p>User email: {user.email} </p>
                    <p>User contact: {user.contact} </p>
                    <p>User location: {user.location} </p>
                    
                    -------------------------
                     <h3>Delivery details<h3/>
                    <p>Delivery address: {order.deliveryInformation}</p>
                    <p>Order date: {order.order_date} </p>
                     <h4>Thank you!!!</h4>

                    ---------------------------
                   
                      
                    <a href="https://www.facebook.com/PalsFoodCourtskireka/">Visit our us.</a>
                </body>
            </html>"""
        
        mail.send(msg)
    
        return jsonify({"message": "Email sent to multiple recipients!"}), 201

    except Exception as e:
        return jsonify({"message": "Mail error.", "error": str(e)}), 500




@order1.route('/item/<int:item_id>', methods=['GET'])
def get_item(item_id):
    try:
        item = MenuItem.query.get(item_id)
        if not item:
            return jsonify({"message": "Item not found"}), 404
        
        item_details = {
            "id": item.id,
            "name": item.name,
            "description": item.description,
            "price": item.price,
            "category":item.category,
            "image":item.image
        }
        
        return jsonify(item_details), 200
    except Exception as e:
        return jsonify({"message": "An error occurred", "error": str(e)}), 500
    
    
    
@order1.route('/items', methods=['GET'])
def get_items():
    try:
        items = MenuItem.query.all()
        items_list = [{
            "id": item.id,
            "name": item.name,
            "description": item.description,
            "price": item.price,
            "image": item.image  # Ensure you have this field in your database
        } for item in items]
        
        return jsonify(items_list), 200
    except Exception as e:
        return jsonify({"message": "An error occurred", "error": str(e)}), 500
    
    
from flask_cors import CORS, cross_origin
    
@order1.route('/all', methods=['GET'])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
@jwt_required()  # This decorator ensures the endpoint is protected
def get_all_orders():
    try:
        # Retrieve all orders from the database
        orders = Order.query.all()
        
        # Convert each order to a dictionary
        orders_list = []
        for order in orders:
            orders_list.append({
                "id": order.id,
                "restaurant_id": order.restaurant_id,
                "user_id": order.user_id,
                "quantity": order.quantity,
                "order_date": order.order_date,
                "total_amount": order.total_amount,
                "status": order.status,
                "item_id": order.item_id,
                "deliveryInformation": order.deliveryInformation
            })
        
        # Return the list of orders as JSON
        return jsonify({"orders": orders_list}), 200
    
    except Exception as e:
        # Handle any exceptions that occur
        return jsonify({"message": "An error occurred while fetching orders.", "error": str(e)}), 500

@order1.route('/get-orders', methods=['GET'])
def get_orders():
        orders = Order.query.all()
        
        # Convert each order to a dictionary
        orders_list = []
        for order in orders:
            orders_list.append({
                "id": order.id,
                "restaurant_id": order.restaurant_id,
                "user_id": order.user_id,
                "quantity": order.quantity,
                "order_date": order.order_date,
                "total_amount": order.total_amount,
                "status": order.status,
                "item_id": order.item_id,
                "deliveryInformation": order.deliveryInformation
            })
        
        # Return the list of orders as JSON
        return jsonify({"orders": orders_list}), 200
    
    
    
    
    # Getting all orders
    
    





@order1.route('/history2', methods=['GET'])
@jwt_required()
def ordes():
    try:
        user_id = get_jwt_identity()

        # Query orders for the current user
        orders = Order.query.filter_by(user_id=user_id).order_by(Order.order_date.desc()).all()

        # Serialize orders including image_url if available
        serialized_orders = [{
            'id': order.id,
            'restaurant_id': order.restaurant_id,
            'deliveryInformation': order.deliveryInformation,
            'quantity': order.quantity,
            'total_amount': order.total_amount,
            'status': order.status,
            'item_id': order.item_id,
            'order_date': order.order_date,
            'image': order.item.image  # Assuming item has an image_url attribute
        } for order in orders]

        return jsonify({"orders": serialized_orders}), 200

    except Exception as e:
        return jsonify({"message": "An error occurred while retrieving orders.", "error": str(e)}), 500