function onScroll() {
  if (scrollY>0) {
    navigation.classList.add('scroll') // para add a class scroll na tag nav
  } else 
      navigation.classList.remove('scroll') // para remover a class scroll na tag nav
}

function openMenu () {
  document.body.classList.add('menu-expanded')
}

function closeMenu () {
  document.body.classList.remove('menu-expanded')
}