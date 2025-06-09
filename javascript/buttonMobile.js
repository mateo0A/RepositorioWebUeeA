const btnMobile=document.querySelector('.buttonMobile')
const menu=document.querySelector('.nav-cont')
btnMobile.addEventListener('click',()=>{
    btnMobile.classList.toggle('openn')
    menu.classList.toggle('open')
    if(menu.classList.contains('open')){
        menu.style.left = '0';
    } else {
        menu.style.left = '-100px'; // posición inicial
    }
})