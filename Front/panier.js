//





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
             <span class="quantity"> ${resultCart[i].quantity} </span>
              <button class='plus'>+</button>
              <button class='minus'>-</button>
          </td>
          <td class="totalproduct-price">
           <span class="totalProduct">
          ${resultCart[i].price/100*resultCart[i].quantity}
            </span>
       </td>
      
        </tr>


    `
  let newCart = resultCart ;
  console.log(newCart)
    let plus = document.getElementsByClassName('plus');
    let quantity = document.getElementsByClassName('quantity');
    let minus = document.getElementsByClassName('minus');
    let totalProductPrice = document.getElementsByClassName('totalProduct');

    for (let i = 0; i < plus.length; i++) {
      plus[i].addEventListener('click', () => {
        newCart[i].quantity++;
        quantity[i].textContent = newCart[i].quantity;
        content.innerText;
         
        
       // JSON.stringify(newCart);
       // (JSON.parse(localStorage.getItem('cart')));
        localStorage.setItem('cart', JSON.stringify(newCart));
        quantity.addEventListener('input', function(event){
          var value = event.target.value;
          if (!isNaN(value)) {
            totalProductPrice.innerHTML = changeCost(value);
          }
        })
        console.log(newCart);
      });
    }
    for (let i = 0; i < minus.length; i++) {
      minus[i].addEventListener('click', () => {
        newCart[i].quantity--;
        quantity[i].textContent = newCart[i].quantity;
       // JSON.stringify(newCart);
       // (JSON.parse(localStorage.getItem('cart')));
        localStorage.setItem('cart', JSON.stringify(newCart));
        console.log(newCart);
      });
    }
}



//document.getElementById("contact").addEventListener("click", function (e) {
 // let erreur;

 // let inputs = document.getElementById("contact").getElementsByTagName("input");

 // for (let i = 0; i < inputs.length; i++) {
 //   if (!inputs[i].value) {
 //     erreur = "Veuillez renseigner tous les champs";
 //   }
 // }
//}); //


let productQty = document.getElementsByClassName("product-quantity").value;
  console.log(productQty)
  function getTotalArrayCart() {
    
  }
  
  getTotalArrayCart();

  const userCart = {
    contact: {},
    products: [],
  }

  document.getElementById("contact").addEventListener("submit", function(envoi){
    envoi.preventDefault();

    if (resultCart.length == 0) {
      alert("Votre pânier est vide.")
    } else {
      // récup de tout les champs
      let formName = document.getElementById("firstName").value;
      let formSurname = document.getElementById("lastName").value;
      let formAdress = document.getElementById("address").value;
      let formCity = document.getElementById("city").value;
      let formMail = document.getElementById("email").value;

      userCart.contact = {
        firstName: formName,
        lastName: formSurname,
        address: formAdress,
        city: formCity,
        email: formMail,
      }
      console.log(userCart.contact);
      
    
      for (let v = 0; v < resultCart.length; v++) {
        for (let w = 0; w < resultCart[v].quantity; w++) {
          
          userCart.products.push(resultCart[v].id)
        }
        
      };
        const fetchOptions = {
          headers:{
              'Content-Type': 'application/json',
          },
          method:"POST",
          body: JSON.stringify(userCart)
          
        }
        console.log(userCart);
        
        fetch("http://localhost:3000/api/cameras/order", fetchOptions)
        .then(function(response) {
          return response.json()
        })
        .then(function(data){
          let orderId = data.orderId;
          localStorage.setItem("orderid",orderId );

          console.log(data);
          console.log(orderId);
        })
        window.location.href = "http://127.0.0.1:5500/Front/confirmation.html";//
    }
    
  })

  

 //total du prix calculer en * le prix par la notion de quantity
 //


//faie en sorte que se soit une autre variable pour la qty
//3 étape pour la page produits









//**Afficher le panier sur la page html **
//selecteur + ou - et bouton supprimer pour chaque produits
// relier les boutons à un ajout (regarder exo dessert page web interactive)(event + func)
//



// const btnAddProduct = document.getElementById('addToCart');
//
// btnAddProduct.addEventListener("click");
// console.log(btnAddProduct);
