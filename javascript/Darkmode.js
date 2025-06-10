let drkMode=localStorage.getItem("Dark")
let btnMode=document.querySelector('.switchMode')

const eneableMode=()=>{
    document.querySelector('body').classList.add('darkmode')
    localStorage.setItem("Dark","active")
    
}

const disableMode=()=>{
    document.querySelector('body').classList.remove('darkmode')
    localStorage.setItem("Dark",null)
}
console.log(drkMode);

if(drkMode==="active") eneableMode()

btnMode.addEventListener('click',()=>{
    drkMode=localStorage.getItem("Dark")
    drkMode !== "active" ? eneableMode()  : disableMode()
})