const recettes = [
    {
      title: "Salade pates crudités",
      imgSrc: "/img/recettes_salades/salade_pates_crudite/final.jpg",
      difficulty: "facile",
      link: "/components/recettes_list1_entree/salade_pates_crudités.html#title2"
    },
    {
      title: "Salade melon avocat",
      imgSrc: "/img/recettes_salades/salade_melon_avocat/assiette.jpg",
      difficulty: "facile",
      link: "/components/recettes_list1_entree/salade_melon_avocat.html#title2"
    },
    // Ajoutez d'autres objets de recette ici
  ];
  
  const containerList = document.querySelector('.container_card_list');
  
  recettes.forEach(recette => {
    const card = document.createElement('a');
    card.href = recette.link;
    card.title = recette.title;
    
    const cardContent = document.createElement('div');
    cardContent.classList.add('card_sucre');
    
    cardContent.innerHTML = `
      <p>${recette.title}</p>
      <img src="${recette.imgSrc}" alt="salade" />
      <p>${recette.difficulty}</p>
    `;
    
    card.appendChild(cardContent);
    containerList.appendChild(card);
  });
  