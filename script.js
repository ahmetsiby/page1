function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    const main = document.querySelector('.main-content');
    
                
                
    burger.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
        /* permet de faire disparaitre ma barre de navigation et de remettre */
        if(getComputedStyle(main).display !="none"){
            main.style.display = "none";
        } else {
            main.style.display = "grid";
        }
    });
   
}
toggleMenu();
