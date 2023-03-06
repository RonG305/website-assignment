const navbar = document.querySelector('.nav-links > ul')
const closeMenu = document.getElementById('close')
const openMenu = document.getElementById('open')

openMenu.onclick = () => {
    openMenu.style.display = "none"
    closeMenu.style.display = "flex"
    navbar.style.display = 'flex'
}

closeMenu.onclick = () => {
    navbar.style.display = 'none'
    openMenu.style.display = 'flex'
    closeMenu.style.display = 'none'
}