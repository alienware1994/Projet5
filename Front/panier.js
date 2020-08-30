


let resultCart = JSON.parse(localStorage.getItem('cart'));

console.log(resultCart);
let content = document.getElementById('contenu');
console.log(resultCart.length);
for (var i = 0; i < resultCart.length; i++) {

    content.innerHTML += `
        <tr data-item-key="">
          <td class="product-remove">
            <a>×</a>
          </td>
            <td class="product-thumbnail">
                            <img class="productimage" src="${resultCart[i].picture}" alt="photo de la caméra" widht="50" height="50">
            </td>

            <td class="product-name">
              ${resultCart[i].name}
            </td>

           <td class="product-price">
              ${resultCart[i].price/100}
           </td>

           <td class="product-quantity">
              ${resultCart[i].quantity}
              <button id='plus'>+</button>
              <button>-</button>
          </td>

           <td class="product-subtotal">

          </td>
        </tr>


    `
    let cart2 = localStorage.getItem('cart');
    let plus = document.getElementById('plus');
    console.log(plus);
    for (let i = 0; i < plus.length; i++) {
      console.log(i);
      plus[i].addEventListener('click', () => {
        cart[i].quantity++;
        console.log(cart);
      });
    }
}



document.getElementById("contact").addEventListener("click", function(e) {
  let erreur;

  let inputs = document.getElementById("contact").getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      erreur = "Veuillez renseigner tous les champs";
    }
}

// if (erreur) {
//   e.preventDefault();
//   document.getElementById('erreur').innerHTML = erreur;
//   return false;
// } else {
//   alert('Formulaire envoyé !');
// }

;})
 //total du prix calculer en * le prix par la notion de quantity
 //
 // let cart2 = localStorage.getItem('cart');
 // console.log(JSON.parse(cart2));
 //
 // let plus = document.getElementById('plus');
 // for (let i = 0; i < plus.length; i++) {
 //   plus[i].addEventListener('click', () => {
 //     // console.log(cart);
 //     // console.log(cart[i]);
 //     // console.log(i);
 //     cart[i].qty++;
 //     console.log(cart);
 //   });
 // }
 //
 //

//faie en sorte que se soit une autre variable pour la qty
//3 étape pour la page produits
















// let cart = {};
// cart.products = [];
// cart = [{name:'produit1', qty: 2, price: 100},{name:'produit2', qty: 4, price: 300}];
// localStorage.setItem('cart', JSON.stringify(cart));
//
// let cart2 = localStorage.getItem('cart');
// console.log(JSON.parse(cart2));
// let cartCamera = localStorage.getItem('produit');
//
// console.log(cartCamera);
// let content = document.getElementById('contenu');

// cart.forEach(item => {
//   content.innerHTML += `<p>${item.name}${item.qty}<span class="plus">+</span></p>`
// });

// let plus = document.getElementsByClassName('plus');
// for (let i = 0; i < plus.length; i++) {
//   plus[i].addEventListener('click', () => {
//     // console.log(cart);
//     // console.log(cart[i]);
//     // console.log(i);
//     cart[i].qty++;
//     console.log(cart);
//   });
// }

// function clic() {
//     console.log("Clic !");
// }
//
// var boutonElt = document.getElementById("bouton");
// // // Ajout d'un gestionnaire pour l'événement click
// // boutonElt.addEventListener("click", function () {
// //
// // });
// boutonElt.addEventListener("click", () => {
//   localStorage.setItem(productData.name, JSON.stringify(product));
//     }
// );

// const addToCart = (productData) => {
//  // Assigne valeur à envoyer à localStorage
//  const product = [
//    productData._id,
//    productData.name,
//    productData.price,
//    productData.imageUrl,
//  ];
//  boutonElt.addEventListener("click", () => {
//    localStorage.setItem(productData.name, JSON.stringify(product));
//      }
//  );
//  console.log(boutonElt);
//  };
 // Envoie valeur à localStorage après un clique

//  boutonElt.addEventListener("click", () => {
//    localStorage.setItem(productData.name, JSON.stringify(product));
//    boutonElt.classList.add("invisible");
//    div.textContent = "Le produit a été ajouté au panier !";
//   }
// );



//**Afficher le panier sur la page html **
//selecteur + ou - et bouton supprimer pour chaque produits
// relier les boutons à un ajout (regarder exo dessert page web interactive)(event + func)
//



// const btnAddProduct = document.getElementById('addToCart');
//
// btnAddProduct.addEventListener("click");
// console.log(btnAddProduct);
