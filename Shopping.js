// function run() {
//     var main = document.getElementById("products");

    // var products = [
    //     ['60', 'Hoodie In White', 'images/hoodie1.png'],
    //     ['60', 'Hoodie In Cyan', 'images/hoodie2.png'],
    //     ['60', 'Hoodie In Purple', 'images/hoodie3.png'],
    //     ['60', 'Hoodie In Green', 'images/hoodie4.png'],
    //     ['60', 'Hoodie In Red', 'images/hoodie5.png'],
    //     ['25', 'T Shirt In White', 'images/Tshirt1.png'],
    //     ['25', 'T Shirt In Cyan', 'images/Tshirt2.png'],
    //     ['25', 'T Shirt In Purple', 'images/Tshirt3.png'],
    //     ['25', 'T Shirt In Green', 'images/Tshirt4.png'],
    //     ['25', 'T Shirt In Red', 'images/Tshirt5.png'],
    // ];

//     var totalItems = products.length;

//     for (i = 0; i < totalItems; i++) {
//         var list = document.createElement("li");
//         var para = document.createElement("p");
//         var price = document.createElement("p");
//         var button = document.createElement("button");
//         var imgs = document.createElement("img");
//         var typeBox = document.createElement("input");


//         main.appendChild(list);
//         list.appendChild(price);
//         list.appendChild(imgs);
//         list.appendChild(para);
//         list.appendChild(button);
//         list.appendChild(typeBox);

//         para.innerHTML = products[i][0];
//         price.innerHTML = '$' + products[i][0];
//         para.innerHTML = products[i][1];
//         button.innerHTML = 'Add to cart';
//         imgs.src = products[i][2];
//         typeBox.type = 'number';

//         typeBox.setAttribute("id", "input" + i);
//         typeBox.value = 1;

//         button.dataset.cartIndex = i;
//         button.addEventListener('click', adding, false);
//     }
// }

// function adding(event) {
//     const NUM = event.currentTarget.dataset.cartIndex;

//     products.push([products[NUM]]);
//     products[products.length - 1][1] =
//         Number(document.getElementById('input' + NUM).value);

//     updateCart();
// }

// var totalItems = 0;

// function updateCart() {
//     var itemCounter = document.getElementById('itemcounter')

//     totalItems = 0;
//     for (var i = 0; i < products.length; i++) {
//         totalItems += products[i][1]
//     }

//     itemCounter.innerHTML = totalItems;
// }
var cartItems = [];

function run() {

    var main = document.getElementById('products');

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
    ];

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

    function adding(event) {
        const NUM = event.currentTarget.dataset.cartIndex;
        cartItems.push([items[NUM]]);
        cartItems[cartItems.length - 1][1] = Number(document.getElementById('input' + NUM).value);

        updateCart();
    }

    var totalItems = 0;

    function updateCart() {

        var itemCounter = document.getElementById('itemCount');
        totalItems = 0;
        for (var i = 0; i < cartItems.length; i++) {
            totalItems += cartItems[i][1];
        }
        itemCounter.innerHTML = totalItems;

    }

}