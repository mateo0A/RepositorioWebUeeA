const btnSubTem=document.querySelector('.subTemMenuu')
btnSubTem.addEventListener('click',()=>{
    btnSubTem.classList.add('MenOp')
})
btnSubTem.addEventListener('mouseleave',()=>{
    btnSubTem.classList.remove('MenOp') 
})