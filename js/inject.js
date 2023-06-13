import { recettesList } from "./recettesList.js";
const liste = document.querySelector('#liste');

function afficherRecette() {
    var card = document.querySelector('.card');
    var cardxl = document.querySelector('.cardxl');
    
    // card.style.display = 'none';
    cardxl.style.display = 'block';
}

function retour() {
    var card = document.querySelector('.card');
    var cardxl = document.querySelector('.cardxl');
    
    card.style.display = 'block';
    cardxl.style.display = 'none';
}

recettesList.forEach(recette => {
    if (recette.imgSrc) {
        liste.innerHTML += `
        <div class="card" >
            <img src=${recette.imgSrc} alt=""/>
            <div class="card-content ">
                <h2>${recette.recetteTitle}</h2>
                <p>${recette.descriptionRecette}</p>
                <p>Preparation:${recette.duration} min</p>
                <button onclick="afficherRecette()">voir la recette</button>
            </div>
        </div>
        <div class="cardxl" style="display:none ;">
            <h2>${recette.recetteTitle}</h2>
            <img src=${recette.img2Src} alt=""/>
            <div>
                <ul>${recette.etape1}</ul>
            </div>     
            <img src=${recette.img3Src} alt=""/>
            <p>${recette.etape2}</p>
            <img src=${recette.img4Src} alt=""/>
            <p>${recette.etape3}</p>
            <p>${recette.etape4}</p>
            <p>${recette.etape5}</p>
            <button class="" onclick="retour()">retour</button>
        </div>
        `;
    }
});
