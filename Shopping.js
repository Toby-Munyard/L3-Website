var items = [
    ['images/hoodie1.png', '60', 'Hoodie In White'],
    ['images/hoodie2.png', '60', 'Hoodie In Cyan'],
    ['images/hoodie3.png', '60', 'Hoodie In Purple'],
    ['images/hoodie4.png', '60', 'Hoodie In Green'],
    ['images/hoodie5.png', '60', 'Hoodie In Red'],
    ['images/Tshirt1.png', '25', 'T Shirt In White'],
    ['images/Tshirt2.png', '25', 'T Shirt In Cyan'],
    ['images/Tshirt3.png', '25', 'T Shirt In Purple'],
    ['images/Tshirt4.png', '25', 'T Shirt In Green'],
    ['images/Tshirt5.png', '25', 'T Shirt In Red'],
]; //items for sale as well as price and name

var cartItems = [];

function run() {

    var main = document.getElementById('products');

    // elements needing to be added

    for (var i = 0; i < items.length; i++) {
        var ele = document.createElement('li');
        var pic = document.createElement('img');
        var price = document.createElement('h1');
        var desc = document.createElement('h2');
        var add = document.createElement('button');
        var typeBox = document.createElement('input');
        // Push elements into html

        main.appendChild(ele);
        ele.appendChild(pic);
        ele.appendChild(price);
        ele.appendChild(desc);
        ele.appendChild(add);
        ele.appendChild(typeBox);
        //edit pusher elements info from array

        pic.src = items[i][0];
        price.innerHTML = '$' + items[i][1];
        desc.innerHTML = items[i][2];
        add.innerHTML = 'Add to Cart';
        typeBox.type = 'number';

        typeBox.setAttribute("id", "input" + i);
        typeBox.value = 1;

        add.dataset.cartIndex = i;
        add.addEventListener('click', adding, false);
    }

    function adding(Event) {
        const NUM = Event.currentTarget.dataset.cartIndex;

        cartItems.push([items[NUM]]);
        cartItems[cartItems.length - 1][1] = Number(document.getElementById('input' + NUM).value);

        updateCart();
    } //end func adds item to cart and the number of said item
}//end func run holds majority of things cart needs to display the differnet iteams and store their data

function updateCart() {
    var itemCounter = document.getElementById('itemCount');

    totalItems = 0;

    window.sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

    var data = sessionStorage.getItem('cartItems');
    data = JSON.parse(data);

    cartItems = data;

    for (var i = 0; i < cartItems.length; i++) {
        totalItems += cartItems[i][1];
    }

    itemCounter.innerHTML = totalItems;

} //end func stores cart items in session storage meaning it can be found across multiple pages


function loadCart() {
    var main = document.getElementById('cartProducts');
    // elements needing to be added

    var data = sessionStorage.getItem('cartItems');
    data = JSON.parse(data);

    cartItems = data;

    updateCart();

    for (var i = 0; i < cartItems.length; i++) {
        var ele = document.createElement('li');
        var pic = document.createElement('img');
        var price = document.createElement('h1');
        var desc = document.createElement('h2');
        var deleteItem = document.createElement('button');
        var amount = document.createElement('h2');
        var subtotal = document.createElement('h3');

        // Push elements into html
        main.appendChild(ele);
        ele.appendChild(pic);
        ele.appendChild(price);
        ele.appendChild(desc);
        ele.appendChild(deleteItem);
        ele.appendChild(amount);
        ele.appendChild(subtotal);
        //edit pusher elements info from array

        pic.src = cartItems[i][0][0];
        price.innerHTML = '$' + cartItems[i][0][1];
        desc.innerHTML = cartItems[i][0][2];

        deleteItem.innerHTML = 'Delete';
        deleteItem.dataset.cartIndex = i;
        deleteItem.addEventListener('click', deleteMe, false);

        amount.innerHTML = cartItems[i][1];
        subtotal.innerHTML = '$' + cartItems[i][1] * cartItems[i][0][1];
    }

} //end func loadCart holds items and stores them in sessionStorage so they work between the shopping and cart pages, also creates the delete button for the deleteMe function

function deleteMe() {
    const NUM = event.currentTarget.dataset.cartIndex;

    delete cartItems[NUM];

    cartItems = cartItems.filter(item => item !== undefined);

    updateCart();
    loadCart();
    window.location.reload(true);
} //end func deletes unwanted items from cart at checkout