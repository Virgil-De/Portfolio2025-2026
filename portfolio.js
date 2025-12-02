
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
modalDescription.textContent = "Cybersécurité, Serveurs, Virtualisation, Réseau, Administration systèmes"; 
modal.style.display="flex"; 
    
}); 
    
item4.addEventListener("click", () => {  
modalTitre.textContent = "Solutions logicielles et applications métiers:"; 
modalDescription.textContent = "Développement web, Mobile, Base de donnée, Script,"; 
modal.style.display="flex"; 
});

close.addEventListener("click", () => 
    modal.style.display="none");

modal.addEventListener("click", e => { 
    if (e.target === modal) modal.style.display ="none";
});