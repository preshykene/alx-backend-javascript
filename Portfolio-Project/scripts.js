// Function to add an item
function addItem() {
    const itemName = document.getElementById('itemInput').value;
    const itemPrice = document.getElementById('priceInput').value;

    fetch('/add_item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `item_name=${itemName}&item_price=${itemPrice}`
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerHTML = data.message;
    });
}

// Function to remove an item
function removeItem() {
    const itemName = document.getElementById('itemInput').value; // Assuming the user enters the item name to be removed

    fetch('/remove_item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `item_name=${itemName}`
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerHTML = data.message;
    });
}

// Function to display items
function displayItems() {
    fetch('/display_items')
    .then(response => response.json())
    .then(data => {
        let output = '<ul>';
        data.forEach(item => {
            output += `<li>${item.name}: $${item.price}</li>`;
        });
        output += '</ul>';
        document.getElementById('output').innerHTML = output;
    });
}

// Function to calculate total cost
function calculateTotal() {
    fetch('/calculate_total')
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerHTML = `Total cost: $${data.total_cost}`;
    });
}

