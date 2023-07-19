let acceuil = document.getElementById('nav_acceuil') ,
services = document.getElementById('nav_services') ,
portfolio = document.getElementById('nav_portfolio') ,
contact = document.getElementById('nav_contact') ,
acceuil_s = document.getElementById('nav_acceuil_s') ,
services_s = document.getElementById('nav_services_s') ,
portfolio_s = document.getElementById('nav_portfolio_s') ,
contact_s = document.getElementById('nav_contact_s') ,
showMenu = document.getElementById('show_menu') ,
hideMenu = document.getElementById('hide_menu') ,
menuResp = document.getElementById('menu_resp') ;


//grand ecran
//le lien active au chargement
acceuil.className = 'nav-active' ;

//modification sur clique des liens
acceuil.onclick =()=>{
    acceuil.className = 'nav-active' ;
    services.className = portfolio.className = contact.className = '' ;
};

services.onclick =()=>{
    services.className = 'nav-active' ;
    acceuil.className = portfolio.className = contact.className = '' ;
};

portfolio.onclick =()=>{
    portfolio.className = 'nav-active' ;
    acceuil.className = services.className = contact.className = '' ;
};

contact.onclick =()=>{
    contact.className = 'nav-active' ;
    acceuil.className = services.className = portfolio.className = '' ;
};


// phone ou petit ecran
//le lien active au chargement
acceuil_s.className = 'nav-active' ;

//modification sur clique des liens
acceuil_s.onclick =()=>{
    acceuil_s.className = 'nav-active' ;
    services_s.className = portfolio_s.className = contact_s.className = '' ;
    menuResp.style.display = 'none' ;
};

services_s.onclick =()=>{
    services_s.className = 'nav-active' ;
    acceuil_s.className = portfolio_s.className = contact_s.className = '' ;
    menuResp.style.display = 'none' ;
};

portfolio_s.onclick =()=>{
    portfolio_s.className = 'nav-active' ;
    acceuil_s.className = services_s.className = contact_s.className = '' ;
    menuResp.style.display = 'none' ;
};

contact_s.onclick =()=>{
    contact_s.className = 'nav-active' ;
    acceuil_s.className = services_s.className = portfolio_s.className = '' ;
    menuResp.style.display = 'none' ;
};


// gestion affichage du menu en mode petit ecran

showMenu.onclick = ()=>{
    menuResp.style.display = 'block' ;
}; 
hideMenu.onclick = ()=>{
    menuResp.style.display = 'none' ;
}; 