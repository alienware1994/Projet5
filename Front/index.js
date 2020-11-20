// constante pour le stockage de l'API //
const objectApi = document.getElementById("produits");

// await fetch pour l'accés à l'API du serveur et gen' du html //

async function produits(url) {
  let result = await fetch(url);
  return result.json();
}

produits("http://localhost:3000/api/cameras").then((cameras) => {
  //boucle forEach pour répeter l'action autant qu'il y a de produits
  cameras.forEach((camera) => {
    console.log(camera);

    let link = document.createElement("a");
    link.id = "lien";
    link.href = "produit.html?id=" + camera._id;
    link.textContent = "fiche du produit";
    objectApi.innerHTML += `
					<article class="produit">
						<a href=${link.href}>
							<img class="productimage" src="${camera.imageUrl}" alt="photo de la caméra" widht="200" height="200">
							<div class="libelle">
								<h2>${camera.name}</h2>
								
							</div>
						</a>
					</article>
          `;    
  });
  alert("Importation réussi");
});
