let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".btn");


bouton.addEventListener("click", function(){
titre.innerText = ("Titre modifié");
titre.classList.toggle ("highlight");
image.setAttribute("src","https://i.pinimg.com/736x/c3/20/d6/c320d6fbb902d639ee5692ec70dbb24c.jpg");
image.setAttribute("alt","Nouvelle image");





});