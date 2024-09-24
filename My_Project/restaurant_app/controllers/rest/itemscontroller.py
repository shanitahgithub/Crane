

from flask import Flask
from flask import Blueprint,request,jsonify
# from restaurant_app.models.menu import Menu,db
from restaurant_app.extensions import db,Bcrypt,JWTManager
from flask_jwt_extended import  create_access_token,create_refresh_token
from flask_jwt_extended import jwt_required, get_jwt_identity
from restaurant_app.models.item import MenuItem


item_bp = Blueprint('item_bp', __name__, url_prefix='/api/v2/item_bp')

def get_menu_items(menu_id):
    try:
        items = MenuItem.query.filter_by(menu_id=menu_id).all()
        serialized_items = [{
            'id': item.id,
            'name': item.name,
            'description': item.description,
            'price': item.price,
            'image': item.image,
            'menu_id':item.menu_id
        } for item in items]
        return jsonify(serialized_items), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@item_bp.route('/get', methods=['GET'])
def get_all_items():
    try:
        items = MenuItem.query.all()
        serialized_items = [item.to_dict() for item in items]
        return jsonify(serialized_items), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 50

@item_bp.route('/<int:menu_id>', methods=['GET'])
def api_get_items_by_category(menu_id):
    return get_menu_items(menu_id)

# Routes to get menu items by category
@item_bp.route('/breakfast', methods=['GET'])
def api_breakfast_items():
    return get_menu_items('breakfast')

@item_bp.route('/lunch', methods=['GET'])
def api_lunch_items():
    return get_menu_items('lunch')

@item_bp.route('/fast-foods', methods=['GET'])
def api_fast_foods_items():
    return get_menu_items('fast-foods')

@item_bp.route('/salads', methods=['GET'])
def api_dinner_items():
    return get_menu_items('salads')

@item_bp.route('/drinks', methods=['GET'])
def api_supper_items():
    return get_menu_items('drinks')

@item_bp.route('/', methods=['POST'])
def create_menu_item():
    data = request.get_json()

    menu_id = data.get('menu_id')
    name = data.get('name')
    description = data.get('description')
    price = data.get('price')
    category = data.get('category')
    image = data.get('image')

    if not all([menu_id, name, description, price, category]):
        return jsonify({'error': 'Missing data'}), 400

    new_item = MenuItem(menu_id=menu_id, name=name, description=description, price=price, category=category, image=image)
    

    try:
        db.session.add(new_item)
        db.session.commit()
        return jsonify(new_item.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
    
@item_bp.route('/edit/<int:item_id>', methods=['PUT'])
def edit_menu_item(item_id):
    data = request.get_json()

    name = data.get('name')
    description = data.get('description')
    price = data.get('price')
    category = data.get('category')
    image = data.get('image')

    if not all([name, description, price, category,image]):
        return jsonify({'error': 'Missing data'}), 400

    try:
        item = MenuItem.query.get(item_id)
        if item is None:
            return jsonify({'error': 'Item not found'}), 404

        item.name = name
        item.description = description
        item.price = price
        item.category = category
        item.image = image if image else item.image

        db.session.commit()
        return jsonify(item.to_dict()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


@item_bp.route('/edit/<int:item_id>', methods=['GET'])
def get_menu_item(item_id):
    try:
        # item = MenuItem.query.get('id', item_id)
        item = MenuItem.query.filter_by(id=item_id).first()
        if item is None:
            return jsonify({'error': 'Item not found'}), 404

        return jsonify(item.to_dict()), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
    # Delete 
@item_bp.route('/delete/<int:item_id>', methods=['DELETE'])
def delete_menu_item(item_id):
    item = MenuItem.query.get(item_id)
    if not item:
        return jsonify({'error': 'Item not found'}), 404

    try:
        db.session.delete(item)
        db.session.commit()
        return jsonify({'message': 'Item deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500





