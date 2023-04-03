let cart = [];



let frete = 100;
// ***************ATUALIZANDO O CARRINHO DE COMPRAS***************

// Função para atualizar o carrinho de compras
function renderCart() {
    let cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `${item.name} - R$ ${item.price}`;
        cartList.appendChild(listItem);
        total += item.price;

        
    });

    let shippingCost = 100.00;
    total += shippingCost;

    document.getElementById('total-price').innerHTML = `Total do pedido: R$ ${total.toFixed(2)}`;
}

// Adiciona um item ao carrinho de compras
function addToCart(name, price) {
    let item = { name, price };
    cart.push(item);
    renderCart();

    localStorage.setItem('cart', JSON.stringify(cart));

    let storedCart = localStorage.getItem('cart');
   
    if (storedCart) {
        cart = JSON.parse(storedCart);
        renderCart();
      }
}



$(document).ready(function () {
    // Recupera a lista de itens do armazenamento local
    let storedCart = JSON.parse(localStorage.getItem('cart'));

    // Exibe a lista de itens na página
    if (storedCart) {
        let total = 0;
        storedCart.forEach(item => {
            $('#cartItems').append(`
          <li class="list-group-item d-flex justify-content-between align-items-center">
            ${item.name}
            <span class="badge bg-primary rounded-pill">$${item.price.toFixed(2)}</span>
          </li>
        `);
            total += item.price;
        });

        $('#totalPrice').text(`$${total.toFixed(2)}`);
    }
});

// Adiciona o evento de clique ao botão "Adicionar ao Carrinho"
$(document).ready(function () {
    $('.add-to-cart').click(function () {
        let name = $(this).siblings('.card-title').text();
        let price = parseFloat($(this).attr('data-price'));
        addToCart(name, price);
    });
});



var button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    $('#exampleModal').modal('show');
  });





























// let cart = [];

// // ***************ATUALIZANDO O CARRINHO DE COMPRAS***************

// // Função para atualizar o carrinho de compras
// function renderCart() {
//     let cartList = document.getElementById('cart');
//     cartList.innerHTML = '';
//     let total = 0;
//     cart.forEach(item => {
//         let listItem = document.createElement('li');
//         listItem.className = 'list-group-item';
//         listItem.innerHTML = `${item.name} - R$ ${item.price}`;
//         cartList.appendChild(listItem);
//         total += item.price;

        
//     });
//     document.getElementById('total-price').innerHTML = `Total: R$ ${total.toFixed(2)}`;
// }

// // Adiciona um item ao carrinho de compras
// function addToCart(name, price) {
//     let item = { name, price };
//     cart.push(item);
//     renderCart();

//     localStorage.setItem('cart', JSON.stringify(cart));

//     let storedCart = localStorage.getItem('cart');
   
//     if (storedCart) {
//         cart = JSON.parse(storedCart);
//         renderCart();
//       }
// }



// $(document).ready(function () {
//     // Recupera a lista de itens do armazenamento local
//     let cartItems = JSON.parse(localStorage.getItem('cartItems'));

//     // Exibe a lista de itens na página
//     if (cartItems) {
//         let total = 0;
//         cartItems.forEach(item => {
//             $('#cartItems').append(`
//           <li class="list-group-item d-flex justify-content-between align-items-center">
//             ${item.name}
//             <span class="badge bg-primary rounded-pill">$${item.price.toFixed(2)}</span>
//           </li>
//         `);
//             total += item.price;
//         });

//         $('#totalPrice').text(`$${total.toFixed(2)}`);
//     }
// });

// // Adiciona o evento de clique ao botão "Adicionar ao Carrinho"
// $(document).ready(function () {
//     $('.add-to-cart').click(function () {
//         let name = $(this).siblings('.card-title').text();
//         let price = parseFloat($(this).attr('data-price'));
//         addToCart(name, price);
//     });
// });