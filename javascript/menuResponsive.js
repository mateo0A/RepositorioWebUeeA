let withh=window.innerWidth

if(withh<720){
    document.querySelector('.nav-cont').style.left="-100%"

}else{
    document.querySelector('.nav-cont').style.left="-100px"

}
window.addEventListener('resize',()=>{
    withh=window.innerWidth
    if(withh<720){
    document.querySelector('.nav-cont').style.left="-100%"

    }else{
        document.querySelector('.nav-cont').style.left="-100px"

    }
})