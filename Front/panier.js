//Variable qui stock le panier en le récupérant du local storage//

let resultCart = JSON.parse(localStorage.getItem("cart"));

console.log(resultCart);
let content = document.getElementById("contenu");
let totalCart = document.getElementById("totalCart");
console.log(resultCart.length);
//------------------------------Boucle for pour l'affichage des porduits dans le panier-------------------------------//
for (var i = 0; i < resultCart.length; i++) {
  content.innerHTML += `
        <tr class="lookproduit">
          
            <td class="product-thumbnail">
            <img class="productimage" src="${
              resultCart[i].picture
            }" alt="photo de la caméra" widht="50" height="50">
            </td>

            <td class="product-name">
              ${resultCart[i].name}
            </td>

           <td class="product-price">
              ${resultCart[i].price / 100}€
           </td>

           <td class="product-quantity">
             <span class="quantity"> ${resultCart[i].quantity} </span>
              <button class='plus'>+</button>
              <button class='minus'>-</button>
          </td>
          <td class="totalproduct-price">
           <span class="totalProduct">
          ${(resultCart[i].price / 100) * resultCart[i].quantity}€
            </span>
       </td>
      
        </tr>
      
    `;
     
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  let newCart = resultCart;
  console.log(newCart);
  let plus = document.getElementsByClassName("plus");
  let quantity = document.getElementsByClassName("quantity");
  let minus = document.getElementsByClassName("minus");
  let totalProductPrice = document.getElementsByClassName("totalProduct").length;
  let deleteProduct = document.getElementsByClassName("delete");
  console.log(totalProductPrice);
  //-----------------------------------------------Boucle for pour le bouton plus et moins------------------------------------------------------------//
  for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", () => {
      newCart[i].quantity++;
      quantity[i].textContent = newCart[i].quantity;
      location.reload();
      localStorage.setItem("cart", JSON.stringify(newCart));
      console.log(newCart);
      console.log(totalProductPrice);
    });
  }
  for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", () => {
      newCart[i].quantity--;
      quantity[i].textContent = newCart[i].quantity;
      localStorage.setItem("cart", JSON.stringify(newCart));
      console.log(newCart);
      location.reload();
    });
  }

}
//--------------------------------------------------Constante contenant le tableau product et l'objet contact------------------------------------------------------------//
const userCart = {
  contact: {},
  products: [],
};
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
document.getElementById("contact").addEventListener("submit", function (envoi) {
  envoi.preventDefault();

  if (resultCart.length == 0) {
    alert("Votre pânier est vide.");
  } else {
    //--------------------------------------------------------Récupération de tout les champs du form dans des variables-----------------------------------------------------//
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
    };
    console.log(userCart.contact);

    for (let v = 0; v < resultCart.length; v++) {
      for (let w = 0; w < resultCart[v].quantity; w++) {
        userCart.products.push(resultCart[v].id);
      }
    }
    //-------------------------------------------------------Constante pour l'envoie au serveur avec la promesse then--------------------------------------------------------//
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userCart),
    };
    console.log(userCart);

    fetch("http://localhost:3000/api/cameras/order", fetchOptions)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let orderId = data.orderId;
        localStorage.setItem("orderid", orderId);

        console.log(data);
        console.log(orderId);
//--------------------------------------------------------Redirection vers la page confirmation--------------------------------------------------------------------------//
        window.location.href = "http://127.0.0.1:5500/Front/confirmation.html";
      });
  
  }
});
