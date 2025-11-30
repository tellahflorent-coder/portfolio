// Sélectionnez les éléments HTML nécessaires
const galleryContainer = document.getElementById('imageGallery');
const galleryInner = galleryContainer.querySelector('.gallery-inner');

// Événement lorsque la souris entre dans la zone
galleryContainer.addEventListener('mouseenter', () => {
  console.log("Souris entrée : Défilement activé");
  // Ajoute la classe CSS qui démarre l'animation (animation-play-state: running)
  galerine.classList.add('is-scrolling'); 
});

// Événement lorsque la souris sort de la zone
galeri.addEventListener('mouseleave', () => {
  console.log("Souris sortie : Défilement arrêté");
  // Retire la classe CSS pour mettre l'animation en pause
  galerine.classList.remove('is-scrolling');
});
