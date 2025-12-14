
// Navbar menu burger

const hamburger =
document.querySelector('.hamburger');
const navMenu = 
document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// --- SCROLL FLUIDE ET FERMETURE EN MOBILE ---
const navLinks = 
document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {    
    link.addEventListener('click', 
function(e) {        
    e.preventDefault(); // empêche le saut instantané        
      
    const targetId = 
this.getAttribute('href').substring(1);        
    const targetSection = 
document.getElementById(targetId);        
       
    targetSection.scrollIntoView({            
        behavior: 'smooth',            
        block: 'start'        
    });               

    if 
(navMenu.classList.contains('active')) {            
navMenu.classList.remove('active');        
        }    
    });
}); 



const item3 = 
document.getElementById("item3"); 

const item4 = 
document.getElementById("item4"); 

const modal = 
document.getElementById("modal1"); 

const modalTitre =  
document.getElementById("modal-titre"); 

const modalDescription = 
document.getElementById("modal-description"); 

const close = 
document.getElementById("close"); 

item3.addEventListener("click", () => {  
modalTitre.textContent = "Solutions d'Infrastructure, Systèmes et Réseaux:"; 
modalDescription.innerHTML = "Objectif :<br> Former des professionnels capables d'assurer l'installation, la maintenance et la sécurisation des infrastructures informatiques.<br><br> Missions clés :<br> Administration des systèmes et réseaux (Windows et Linux), déploiement de services en virtualisation, par docker, gestion de la sécurité des données avec pare-feu et sécurité locale.<br><br> Compétences :<br> Maîtrise des protocoles TCP/IP, installation de services réseaux, gestion de la virtualisation, et contribution à la politique de cybersécurité de l'organisation."; 
modal.style.display="flex"; 
    
}); 
    
item4.addEventListener("click", () => {  
modalTitre.textContent = "Solutions logicielles et applications métiers:"; 
modalDescription.innerHTML = "Objectif :<br> Former des développeurs d'applications.<br><br> Missions clés :<br> Conception, développement, test, et déploiement d'applications logicielles (web, mobiles, ou de bureau) répondant aux besoins spécifiques des utilisateurs. Gestion et administration de bases de données. Contribution à l'amélioration continue des processus métiers.<br><br> Compétences :<br> Maîtrise des langages de programmation (orientés objet, web), développement sécurisé, utilisation des frameworks et des méthodes agiles (Scrum), maitrise backend et frontend."; 
modal.style.display="flex"; 
});

close.addEventListener("click", () => 
    modal.style.display="none");

modal.addEventListener("click", e => { 
    if (e.target === modal) modal.style.display ="none";
});




// Code de la partie parcours
// Fonction pour gérer l'animation des compétences
function animateSkills(target) {
    target.querySelectorAll("li").forEach((el, i) => {
        const duration = '0.8s';
        const delay = i * 0.25;

        // On applique l'animation et le délai
        el.style.animationDelay = `${delay}s`;
        el.style.animation = `fadeInUp ${duration} ease forwards`;
    });
}

// ----------------------------------------------------
// Configuration de l'Intersection Observer
// ----------------------------------------------------

// La fonction de callback qui est appelée quand l'élément entre ou sort de la vue
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        // 'entry.isIntersecting' est vrai si l'élément est dans la zone visible
        if (entry.isIntersecting) {
            // L'élément est visible, on lance l'animation
            animateSkills(entry.target);

            // Optionnel: Une fois l'animation lancée, on arrête d'observer l'élément
            observer.unobserve(entry.target);
        }
    });
};

// Les options de l'Observer :
// rootMargin: '0px' signifie qu'on observe l'intersection avec la limite de la fenêtre (viewport).
// threshold: 0.1 signifie que l'élément doit être visible à 10% pour déclencher le callback.
const observerOptions = {
    root: null, // Le viewport est la zone racine
    rootMargin: '0px',
    threshold: 0.6 // Déclenche quand 20% de la cible est visible
};

// Création de l'Observer
const skillsObserver = new IntersectionObserver(observerCallback, observerOptions);

// Cible à observer : la section complète des compétences
const competencesSection = document.querySelector("#competences");

if (competencesSection) {
    skillsObserver.observe(competencesSection);
}


// IMPORTANT: Gardez les autres codes JS (hamburger, modale BTS SIO) si vous les avez.
// S'il n'y a que cela, c'est bon.



document.addEventListener('DOMContentLoaded', function() {
    // Cibler le NOUVEL ID du bouton
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) { // S'assurer que le bouton existe avant d'ajouter l'écouteur
        scrollToTopBtn.addEventListener('click', function() {
            // Remonter au sommet de la page en douceur
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        });
    }
    
    // Assurez-vous de retirer tout l'ancien code JavaScript du bouton précédent !
});