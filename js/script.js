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

/* VALIDATION CONTACT FORM WITH JQUERY */
$(document).ready(function(){
    let buttonContact = document.querySelector(".btn-contact-me");
    // $(".btn-contact-me").attr("disabled",true);
    buttonContact.addEventListener("click",validateContact);
    function validateContact(){
        let errorName = document.querySelector(".name-error");
        let errorEmail = document.querySelector(".email-error");
        let errorProject = document.querySelector(".projet-error");
        let errorPhone = document.querySelector(".telephone-error");
        let errorMessage = document.querySelector(".messageErr");
        let nom = $("#nom").val();
        let email = $("#email").val();
        let message = $("#message").val();
        let projet = $("#projet").val();
        let telephone = $("#telephone").val();
        if(nom.length===0 || nom.length < 3){
            errorName.innerHTML = "Le champ nom complet est requis et doit comporter au moins trois caractères";
            return false;
        }else if(email.length===0 || !validateEmail(email)){
            errorEmail.innerHTML = "Le champ email est requis et doit être au bon format";
            return false;
        }else if(projet.length===0 || projet.length < 3){
            errorProject.innerHTML = "Le champ projet est requis et doit comporter au moins trois caractères";
            return false;
        }else if(telephone.length===0 || !validatePhone(telephone)){
            errorPhone.innerHTML = "Le champ Téléphone est requis et doit être au bon format";
            return false;
        }else if(message.length===0 || message.length < 3 || telephone.length < 10){
            errorMessage.innerHTML = "Le champ message est requis et doit comporter au moins trois caractères";
            return false;
        }else{
            alert("VOTRE MESSAGE A ETE ENVOYE, PATIENTEZ, JE VOUS REPONDRAI SOUS PEU");
            $("#form")[0].reset();
        }
    }
    
    function validateEmail(email){
        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email);
    }
    function validatePhone(phone){
        let phoneReg = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        return phoneReg.test(phone);
    }
})