let scrollPosition = 0;
let scrollStep = 280; // Largeur d'un élément + marge
let containerWidth = 1400; // Largeur du conteneur affichant les éléments (3 éléments * 280px)

// Vérifier la largeur de l'écran et ajuster les valeurs en conséquence
if (window.innerWidth <= 768) { // Par exemple, pour une largeur d'écran de 768 pixels ou moins
  scrollStep = 280; // Modifier la valeur du défilement pour les téléphones
  containerWidth = 300; // Modifier la largeur du conteneur pour les téléphones
}

const scrollContainer = document.querySelector(".scroll-serv");

// Fonction pour faire défiler vers la droite
function scrollRight() {
  console.log(scrollPosition);
  console.log(scrollContainer.scrollWidth);
  console.log(containerWidth);
  if (scrollPosition + containerWidth <=  scrollContainer.scrollWidth) {
    scrollPosition += scrollStep;
    if ((window.innerWidth > 1400)&&(scrollPosition > 700)) scrollPosition = 700;
    else if ((window.innerWidth < 800)&&(scrollPosition > 700)) scrollPosition = 1120;
    scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
  }

}



// Fonction pour faire défiler vers la gauche
function scrollLeft() {
  if (scrollPosition > 0) {
    scrollPosition -= scrollStep;
    if (scrollPosition < 0) scrollPosition = 0;
    scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
  }
}

// Gestion des événements tactiles pour le défilement sur mobile
let touchStartX = 0;
let touchEndX = 0;

scrollContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

scrollContainer.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchStartX - touchEndX > 50) {
    // Swipe vers la gauche
    scrollRight();
  } else if (touchEndX - touchStartX > 50) {
    // Swipe vers la droite
    scrollLeft();
  }
});

// Ajouter des gestionnaires d'événements aux boutons cliquables
document.querySelector(".scroll-right").addEventListener("click", scrollRight);
document.querySelector(".scroll-left").addEventListener("click", scrollLeft);


//Modal2
var modal2 = document.getElementById("myModal2");
var text2 = document.getElementById("openModalText2");
var span2 = document.getElementsByClassName("close2")[0];

// Ouvrir la fenêtre modale lorsque l'utilisateur clique sur le texte
text2.onclick = function () {
  modal2.style.display = "block";
};

// Fermer la fenêtre modale lorsque l'utilisateur clique sur le bouton de fermeture
span2.onclick = function () {
  modal2.style.display = "none";
};

// Fermer la fenêtre modale si l'utilisateur clique en dehors de celle-ci
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};


