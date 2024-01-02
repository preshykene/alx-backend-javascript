from flask import Flask, request, jsonify

app = Flask(__name__)

items_list = []

@app.route('/add_item', methods=['POST'])
def add_item():
    item_name = request.form.get('item_name')
    item_price = float(request.form.get('item_price'))
    items_list.append({'name': item_name, 'price': item_price})
    return jsonify({'message': 'Item added successfully'})

@app.route('/remove_item', methods=['POST'])
def remove_item():
    item_name = request.form.get('item_name')
    for item in items_list:
        if item['name'] == item_name:
            items_list.remove(item)
            return jsonify({'message': f'Item {item_name} removed successfully'})
    return jsonify({'message': f'Item {item_name} not found'})

@app.route('/display_items', methods=['GET'])
def display_items():
    return jsonify(items_list)

@app.route('/calculate_total', methods=['GET'])
def calculate_total():
    total_cost = sum(item['price'] for item in items_list)
    return jsonify({'total_cost': total_cost})

if __name__ == '__main__':
    app.run(debug=True)
