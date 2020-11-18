const url = "http://localhost:3000/api/cameras/";
const objectApi = document.getElementById("produits");
// var cart = {};
// cart.products = [];
// localStorage.setItem('cart', JSON.stringify(cart));
var param = new URL(document.location).searchParams.get("id");
// Requête API pour le produits selectionné
var parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id"));
fetch(url + parsedUrl.searchParams.get("id"))
  .then((response) => response.json())
  .then((camera) => {
    console.log(camera);
    // Mise en place de l'HTML avec la syntaxe ES6 //
    objectApi.innerHTML += `
  <article class="product">
      <img class="productimage" src="${
        camera.imageUrl
      }" alt="photo de la caméra" widht="200" height="200">
      <div class="libelle">
        <h2 id="name">${camera.name}</h2>
        <p>${camera.description}</p>
      </div>
      <div class="prix">
        <p id="price">${camera.price / 100}</p>
        <div id="lenses">
        <label for="lenses-select">Choose a lenses:</label>

        <select name="lenses" id="lenses-select">
            <option value="">${camera.lenses[0]}</option>
             <option value="">${camera.lenses[1]}</option>

        </select>

        </div>
        </div>
  </article>
  `;
    //faire
    const addCart = document.querySelector("button");
    addCart.addEventListener("click", function (e) {
      //evenement 'click' pour l'envoi au local storage

      let cameraChosen = {
        id: camera._id,
        name: camera.name,
        picture: camera.imageUrl,
        price: camera.price,
        quantity: 1,
      };
      const cartString = localStorage.getItem("cart");
      let cart;
      if (cartString) {
        cart = JSON.parse(cartString);
      } else {
        cart = [];
      }
      let productInCart = false;
      for (let i = 0; i < cart.length; i++) {
        if (cameraChosen.id == cart[i].id) {
          alert("produit existant");
          productInCart = true;
          cart[i].quantity++;
        }
      }
      if (productInCart == false) {
        cart.push(cameraChosen);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(cameraChosen);
    });
  });
