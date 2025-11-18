
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
modalTitre.textContent = "Option SISR"; 
modalDescription.textContent = "Solution d'infrastructure, systèmes et réseaux: Cybersécurité, serveurs, virtualisation, réseau..."; 
modal.style.display="flex"; 
    
}); 
    
item4.addEventListener("click", () => {  
modalTitre.textContent = "Option SLAM"; 
modalDescription.textContent = "Solutions logicielles et applications métiers: développement web, mobile, base de donnée..."; 
modal.style.display="flex"; 
});

close.addEventListener("click", () => 
    modal.style.display="none");

modal.addEventListener("click", e => { 
    if (e.target === modal) modal.style.display ="none";
});