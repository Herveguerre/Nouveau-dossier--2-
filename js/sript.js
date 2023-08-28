

// Fonction pour récupérer et insérer le contenu du hero
// function inclureHero() {
//   fetch("../../components/hero.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("hero").innerHTML = data;
//     });
// }
// inclureHero();

// Fonction pour récupérer et insérer le contenu du liste1
function inclureList_1() {
  fetch("../../components/list_entree_1.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("list_1").innerHTML = data;
    });
}
inclureList_1();

// Fonction pour récupérer et insérer le contenu du liste2
function inclureList_2() {
  fetch("../../components/list_plat_2.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("list_2").innerHTML = data;
    });
}
inclureList_2();

// Fonction pour récupérer et insérer le contenu du liste3
function inclureList_3() {
  fetch("../../components/list_tarte_3.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("list_3").innerHTML = data;
    });
}
inclureList_3();

// Fonction pour récupérer et insérer le contenu du liste4
function inclureList_4() {
  fetch("../../components/list_dessert_4.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("list_4").innerHTML = data;
    });
}
inclureList_4();

// Fonction pour récupérer et insérer le contenu du liste5
function inclureList_5() {
  fetch("../../components/list_bebe_5.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("list_5").innerHTML = data;
    });
}
inclureList_5();

// Fonction pour récupérer et insérer le contenu du footer
function inclureFooter() {
  fetch("../../components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
}
inclureFooter();

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
