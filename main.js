window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll ()
  showBackToTopButtonOnScroll()
}
 
function showNavOnScroll () {
  if (scrollY>0) {
    navigation.classList.add('scroll') // para add a class scroll na tag nav
  } else 
      navigation.classList.remove('scroll') // para remover a class scroll na tag nav
}

function showBackToTopButtonOnScroll() {
  if (scrollY>550) {
    backToTopButton.classList.add('show') // para add a class scroll na tag nav
  } else 
      backToTopButton.classList.remove('show') // para remover a class scroll na tag nav
}

function openMenu () {
  document.body.classList.add('menu-expanded')
}

function closeMenu () {
  document.body.classList.remove('menu-expanded')
}

//  ScrollReveal Lib https://scrollrevealjs.org/ 
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content')