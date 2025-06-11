const btnSubTem=document.querySelector('.subTemMenuu')
const SubTem=document.querySelector('.subTemMenu')

btnSubTem.addEventListener('click',()=>{
    console.log(1);
    SubTem.classList.add('MenOpp')
})
SubTem.addEventListener('mouseleave',()=>{
    SubTem.classList.remove('MenOpp')
})