function run() {
    var main = document.getElementById("products");

    var products = [
        ['20', 'Random guy NFT', 'img1.jpg'],
        ['25', 'Funny Yellow Dog NFT', 'img2.png'],
        ['3.99', 'Disgusting Ice Cream Bowl NFT', 'img3.jpg'],
    ];

    var totalItems = products.length;

    for (i = 0; i < totalItems; i++) {
        var list = document.createElement("li");
        var para = document.createElement("p");
        var price = document.createElement("p");
        var button = document.createElement("button");
        var imgs = document.createElement("img");
        var typeBox = document.createElement("input");


        main.appendChild(list);
        list.appendChild(price);
        list.appendChild(imgs);
        list.appendChild(para);
        list.appendChild(button);
        list.appendChild(typeBox);

        price.innerHTML = '$' + products[i][0];
        para.innerHTML = products[i][1];
        button.innerHTML = 'Add to cart';
        imgs.src = products[i][2];
        typeBox.type = 'number';

        typeBox.setAttribute("id", "input" + i);
        typeBox.value = 1;

        button.dataset.cartIndex = i;
        button.addEventListener('click', adding, false);
    }
}

function adding(event) {
    const NUM = event.currentTarget.dataset.cartIndex;

    cartItems.push([interms[NUM]]);
    cartItems[cartItems.length - 1][1] =
        Number(document.getElementById('input' + NUM).value);

    updateCart();
}

function updateCart() {
    var itemCounter = document.getElementById('i')

    totalItems = 0;
    for (var i = 0; i < cartItems.length; i++) {
        totalItems += cartItems[i][1]
    }
    
    itemCounter.innerHTML = totalItems;
}