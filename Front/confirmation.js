//-----------------------------------Variable pour la récupération des donnés stocker dans le localstorage(variable stocker dés la confiramtion)--------------------------//
let confirmationId = document.getElementById("commande-id");
let confOrderId = localStorage.getItem("orderid");
confirmationId.innerHTML += `${confOrderId}`;
let resultCart = JSON.parse(localStorage.getItem("cart"));
let resumeCart = document.getElementById("commande-articles");

for (let i = 0; i < resultCart.length; i++) {
  resumeCart.innerHTML += `<tr data-item-key="">
      <td class="product-thumbnail">
      <img class="productimage" src="${
        resultCart[i].picture
      }" alt="photo de la caméra" widht="300" height="300">
      </td>

      <td class="product-name">
        ${resultCart[i].name}
      </td>

     <td class="product-quantity">
       <span class="quantity"> ${resultCart[i].quantity} </span>
    
    </td>
    <td class="totalproduct-price">
     <span class="totalProduct">
    ${(resultCart[i].price / 100) * resultCart[i].quantity}€
      </span>
 </td>

  </tr>
      `;
}
