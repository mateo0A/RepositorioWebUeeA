let widt = window.innerWidth
let height = window.innerHeight
if (widt > 720) {
    document.querySelector('body').classList.remove('menuHover')

    const menuIND = document.querySelector('.nav-cont')
    menuIND.addEventListener('mouseover', () => {
        menuIND.classList.add('open')
        document.querySelector('body').classList.add('menuHover')
    })
    menuIND.addEventListener('mouseleave', () => {
        menuIND.classList.remove('open')
        document.querySelector('body').classList.remove('menuHover')    

    })
} else {
    document.querySelector('body').classList.add('menuHover')

}

window.addEventListener('resize', () => {
    let widt = window.innerWidth

    if (widt > 720) {
        document.querySelector('body').classList.remove('menuHover')

        const menuIND = document.querySelector('.nav-cont')
        menuIND.addEventListener('mouseover', () => {
            menuIND.classList.add('open')
            document.querySelector('body').classList.add('menuHover')
        })
        menuIND.addEventListener('mouseleave', () => {
            menuIND.classList.remove('open')
            document.querySelector('body').classList.remove('menuHover')

        })
    } else {
        document.querySelector('body').classList.add('menuHover')

    }
})