
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



const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            
            animateSkills(entry.target);

            
            observer.unobserve(entry.target);
        }
    });
};


const observerOptions = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.6 
};

// Création de l'Observer
const skillsObserver = new IntersectionObserver(observerCallback, observerOptions);

// Cible à observer : la section complète des compétences
const competencesSection = document.querySelector("#competences");

if (competencesSection) {
    skillsObserver.observe(competencesSection);
}






document.addEventListener('DOMContentLoaded', function() {
    
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) { 
        scrollToTopBtn.addEventListener('click', function() {
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        });
    }
    
    
});