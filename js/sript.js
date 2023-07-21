// Fonction pour récupérer et insérer le contenu du header
function inclureHeader() {
	fetch("../../components/header.html")
	  .then((response) => response.text())
	  .then((data) => {
		document.getElementById("header").innerHTML = data;
	  });
  }
// Fonction pour récupérer et insérer le contenu du head
function inclureHead() {
	fetch("../../components/head.html")
	  .then((response) => response.text())
	  .then((data) => {
		document.getElementById("head").innerHTML = data;
	  });
  }

// Fonction pour récupérer et insérer le contenu du liste1
function inclureList_1() {
	fetch("../../components/list_1.html")
	  .then((response) => response.text())
	  .then((data) => {
		document.getElementById("list_1").innerHTML = data;
	  });
  }

  // Fonction pour récupérer et insérer le contenu du liste2
function inclureList_2() {
	fetch("../../components/list_2.html")
	  .then((response) => response.text())
	  .then((data) => {
		document.getElementById("list_2").innerHTML = data;
	  });
  }

    // Fonction pour récupérer et insérer le contenu du liste3
function inclureList_3() {
	fetch("../../components/list_3.html")
	  .then((response) => response.text())
	  .then((data) => {
		document.getElementById("list_3").innerHTML = data;
	  });
  }

      // Fonction pour récupérer et insérer le contenu du liste4
function inclureList_4() {
	fetch("../../components/list_4.html")
	  .then((response) => response.text())
	  .then((data) => {
		document.getElementById("list_4").innerHTML = data;
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
  

// Appel des fonctions pour inclure le header et le footer etc
inclureHead();
inclureHeader();
inclureList_1();
inclureList_2();
inclureList_3();
inclureList_4();
inclureFooter();
  
  // Désactiver l'événement contextmenu (clic droit)
  //document.addEventListener('contextmenu', function(e) {
   // e.preventDefault();
  //});

  // Votre code JavaScript pour gérer l'impression //
 
    document.getElementById("printButton").addEventListener("click", function() {
      window.print();
    });
  
