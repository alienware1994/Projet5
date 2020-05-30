const url = 'http://localhost:3000/api/cameras/';
const objectApiCamera = document.getElementById("article");
var param = new URL(document.location).searchParams.get("id")
// Requête API pour le produits selectionné
var parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id"));

fetch(url+parsedUrl.searchParams.get("id"))
.then(camera => camera.json())
.then(json=>console.log(json));
