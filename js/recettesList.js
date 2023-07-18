const recettesList = [
	{
	  imgSrc: "../img/recettes_salades/salade_melon_avocat/assiette.jpg",
	  duration: "10.00",
	  recetteTitle : "Salade melon avocat",
	  descriptionRecette : "Salade d'été gourmande ",
	  etape1: "_ 1 avocats<br>_\\1/2<br>melon<br>_\\250g<br>de<br>tomates cerises<br>_ 20 billes de mozzarellas<br>_ 1 concombre<br>_ 4 oeufs dur",
	  img2Src:"../img/recettes_salades/salade_melon_avocat/presentation.png",
	  etape2:" Dans la chair du melon et à l'aide d'une cuillère parisienne, prélevez des petites boules. Vous pouvez également couper le melon en dés. Déposez ces morceaux dans une passoire en plastique en attendant de préparer le reste des légumes.",
	  etape3:"Coupez l'avocat en deux, ôtez le noyau et la peu et détaillez en lanières. Arrosez de jus de citron pour éviter qu'il ne noircisse.",
	  img3Src:"../img/recettes_salades/salade_melon_avocat/final.jpg",
	  etape4:"Coupez les tomates cerises en 2 ou laissez-les tel quel si elles sont trop petites.Dans une assiette, déposez au centre les boules de melon tout autour les morceaux d'avocat et terminez par les tomates.",
	  img4Src:"../img/recettes_salades/salade_melon_avocat/assiette.jpg",
	  etape5:"il n'y plus qu'à deguster ...",
	},
	{
	  imgSrc: "../img/recettes_salades/salade_melon_avocat/assiette.jpg",
	  duration: "09.00",
	  recetteTitle : "Salade melon avocat",
	  descriptionRecette : "Salade d'été gourmande ",
	  etape1: "_ 1 avocats<br>_\\1/2<br>melon<br>_\\250g<br>de<br>tomates cerises<br>_ 20 billes de mozzarellas<br>_ 1 concombre<br>_ 4 oeufs dur",
	  img2Src:"../img/recettes_salades/salade_melon_avocat/presentation.png",
	  etape2:" Dans la chair du melon et à l'aide d'une cuillère parisienne, prélevez des petites boules. Vous pouvez également couper le melon en dés. Déposez ces morceaux dans une passoire en plastique en attendant de préparer le reste des légumes.",
	  etape3:"Coupez l'avocat en deux, ôtez le noyau et la peu et détaillez en lanières. Arrosez de jus de citron pour éviter qu'il ne noircisse.",
	  img3Src:"../img/recettes_salades/salade_melon_avocat/final.jpg",
	  etape4:"Coupez les tomates cerises en 2 ou laissez-les tel quel si elles sont trop petites.Dans une assiette, déposez au centre les boules de melon tout autour les morceaux d'avocat et terminez par les tomates.",
	  img4Src:"../img/recettes_salades/salade_melon_avocat/assiette.jpg",
	  etape5:"il n'y plus qu'à deguster ...",
	},
  ];

  const recettesContainer = document.getElementById('recettes-list');
  const allRecettesContainer = document.getElementById('all-recettes-list');
  const showAllBtn = document.getElementById('show-all-btn');
  const largeCard = document.getElementById('large-card');
  const backBtn = document.getElementById('back-btn');

  function displayRecettes(recettes) {
	recettesContainer.innerHTML = '';
	recettes.forEach((recette, index) => {
	  if (index < 4) {
		const li = document.createElement('li');
		li.innerHTML = recette.recetteTitle;
		recettesContainer.appendChild(li);
	  }
	  const liAll = document.createElement('li');
	  liAll.innerHTML = recette.recetteTitle;
	  allRecettesContainer.appendChild(liAll);
	});
  }

  showAllBtn.addEventListener('click', () => {
	largeCard.style.display = 'block';
  });

  backBtn.addEventListener('click', () => {
	largeCard.style.display = 'none';
  });

  displayRecettes(recettesList);












  document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  // Récupère les valeurs des champs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Crée un objet FormData et ajoute les valeurs des champs
  var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  // Envoie les données du formulaire à un script PHP via AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/send_email.php", true);
  xhr.onload = function() {
    // Vérifie si la requête a été réussie
    if (xhr.status === 200) {
      console.log(xhr.responseText); // Affiche la réponse du script PHP
      // Réinitialise le formulaire si nécessaire
      document.getElementById("contactForm").reset();
    }
  };
  xhr.send(formData);
});





  //btn scroll
  const containerCard = document.querySelector('.container_card');
  const scrollLeftBtn = document.getElementById('scrollLeftBtn');
  const scrollRightBtn = document.getElementById('scrollRightBtn');
  
  scrollLeftBtn.addEventListener('click', () => {
	containerCard.scrollBy({
	  left: -320,
	  behavior: 'smooth'
	});
  });
  
  scrollRightBtn.addEventListener('click', () => {
	containerCard.scrollBy({
	  left: 320,
	  behavior: 'smooth'
	});
  });
  
  