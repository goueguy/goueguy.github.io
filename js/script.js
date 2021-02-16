const scroll_icon = document.getElementById("scrollTop");
window.onscroll = function(){
    scroll();
    fadeInEffect();
    animateCount();
}
function scroll(){
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        scroll_icon.style.display = 'block';
        //menu sticky effect
       document.querySelector("nav").classList.add("sticky");
    }else{
        scroll_icon.style.display = 'none';
        document.querySelector("nav").classList.remove("sticky");
    }
}
//fade in
function fadeInEffect(){
    const fadeIn = document.querySelectorAll(".anim");
    observer = new IntersectionObserver((entries) => {
        //console.log(entries);
        if(entries[0].intersectionRatio > 0){
            entries[0].target.style.animation ='fadeLeft 2s forwards ease-out';
        }else{
            entries[0].target.style.animation ='none';
        }
    })
    
    fadeIn.forEach(card=>{
        observer.observe(card);
    })
    
}
// STATISTICs ANIMATE
function animateCount(){
    //variable speed initialisée à 200
    const speed = 200;
    // je sélectionne tous les éléments html qui ont un id=counter
    const counter = document.querySelectorAll("#counter");
    //je boucle sur l'ensemble des valeurs récupérées(counter)
    counter.forEach(counter => {
        //je compte chaque valeur récupérée et je les affecte à la variable counterNumber
        const counterNumber = +counter.getAttribute('countto');
        //on défini un intervale de répétition sur 500ms
        const updateCount = setInterval(()=>{
            //j ajouter la valeur dans le compte en html
            const divContent = +counter.innerText;
            //je divise la valeur du compte par la valeur du Speed
            const increaseBy = counterNumber / speed;
            //si la valeur du compteur est inférieur à la valeur du compte
            if(divContent < counterNumber){
                //je fais la somme des deux valeurs récupérées en faisant un arrondi
                counter.innerHTML = Math.ceil(divContent + increaseBy);
                //on annule la répétition
                clearInterval(updateCount);
            }

        }, 500);
        
    });
}     
//TOGGLE MENU / NAVBAR
const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

