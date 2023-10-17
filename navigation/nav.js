/*=============== ACTIVE LINK ===============*/
const navlink = document.querySelectorAll('.nav_link')

function activeLink(){
    navlink.forEach((item) => item.classList.remove('active-link'))
    this.classList.add('active-link')
}

navlink.forEach((item) => item.addEventListener('click', activeLink))
