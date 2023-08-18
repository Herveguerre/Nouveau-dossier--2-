
// Fonction pour récupérer et insérer le contenu du header
function inclureHeader() {
  fetch("../../components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });
}

// Fonction pour récupérer et insérer le contenu du hero
function inclureHero() {
  fetch("../../components/hero.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("hero").innerHTML = data;
    });
}

// Fonction pour récupérer et insérer le contenu du liste1
function inclureList_1() {
  fetch("../../components/list_entree_1.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("list_1").innerHTML = data;
    });
}

// Fonction pour récupérer et insérer le contenu du liste2
function inclureList_2() {
  fetch("../../components/list_plat_2.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("list_2").innerHTML = data;
    });
}

// Fonction pour récupérer et insérer le contenu du liste3
function inclureList_3() {
  fetch("../../components/list_tarte_3.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("list_3").innerHTML = data;
    });
}

// Fonction pour récupérer et insérer le contenu du liste4
function inclureList_4() {
  fetch("../../components/list_dessert_4.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("list_4").innerHTML = data;
    });
}

// Fonction pour récupérer et insérer le contenu du liste5
function inclureList_5() {
  fetch("../../components/list_bebe_5.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("list_5").innerHTML = data;
    });
}

// Fonction pour récupérer et insérer le contenu du footer
function inclureFooter() {
  fetch("../../components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
}

// Fonction pour récupérer et insérer le contenu du bouton
function inclureBouton() {
  fetch("../../components/bouton.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("bouton").innerHTML = data;
    });
}

// Fonction pour récupérer et insérer le contenu du nav
function inclureNav() {
  fetch("../../components/nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav").innerHTML = data;
    });
}

// Appel des fonctions pour inclure le header et le footer etc

inclureHeader();
inclureHero();
inclureList_1();
inclureList_2();
inclureList_3();
inclureList_4();
inclureList_5();
inclureFooter();
inclureBouton();
inclureNav();

// Désactiver l'événement contextmenu (clic droit)
//document.addEventListener('contextmenu', function(e) {
// e.preventDefault();
//});



function scrollLeft() {
  const containerCard = document.querySelector(".container_card");
  const cardWidth = document.querySelector(".card_sucre").offsetWidth + 20;
  containerCard.scrollBy(-cardWidth, 0);
}

function scrollRight() {
  const containerCard = document.querySelector(".container_card");
  const cardWidth = document.querySelector(".card_sucre").offsetWidth + 20;
  containerCard.scrollBy(cardWidth, 0);
}





// Enregistrez la position de défilement actuelle dans l'historique
function saveScrollPosition() {
  const scrollPosition = window.scrollY || window.pageYOffset;
  const stateObject = { scrollPosition: scrollPosition };
  history.pushState(stateObject, '', window.location.href);
}

// Ajoutez cet événement au clic sur les liens
document.addEventListener('click', function (event) {
  const link = event.target.closest('a');
  if (link && link.href && !link.href.includes('#')) {
    saveScrollPosition();
  }
});
// Restaurez la position de défilement lorsqu'un état de l'historique est restauré
window.addEventListener('popstate', function (event) {
  if (event.state && event.state.scrollPosition) {
    const scrollPosition = event.state.scrollPosition;
    window.scrollTo(0, scrollPosition);
  }
});




//slide du hero 
const images = document.querySelectorAll('.slideshow-image');
let currentImageIndex = 0;

function showNextImage() {
  const nextImageIndex = (currentImageIndex + 1) % images.length;

  images[currentImageIndex].classList.remove('active');
  images[nextImageIndex].classList.add('active');

  currentImageIndex = nextImageIndex;
}

function startSlideshow() {
  images[currentImageIndex].classList.add('active');
  setInterval(showNextImage, 5000); // Change l'image toutes les 5 secondes
}

startSlideshow();



//menu





