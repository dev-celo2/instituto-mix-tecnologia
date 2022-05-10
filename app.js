window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
  showNavOnScroll()
  showBackToButtonOnScroll()

  activateMenuAtCurrenrSection(home)
  activateMenuAtCurrenrSection(services)
  activateMenuAtCurrenrSection(about)
  activateMenuAtCurrenrSection(contact)
}

function showNavOnScroll(){
  let navigation = document.getElementById('navigation')

  if(scrollY > 0){
    navigation.classList.add('scroll')
  }else{
    navigation.classList.remove('scroll')
  }
}

function showBackToButtonOnScroll(){
  let navigation = document.getElementById('navigation')

  if(scrollY > 400){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function removeMenu(){
  document.body.classList.remove('menu-expanded')
}



ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
home .stats, 
#services, 
#services header, 
#services .card, 
#about, 
#about heaser, 
#about .content`)

function activateMenuAtCurrenrSection(section){
  const targetLine = scrollY + innerHeight / 2

  // Verificar se a sessão passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const secttionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop


  //verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?
  const sectionEndsAt = sectionTop + secttionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limites da função

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


  menuElement.classList.remove('active')
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }
}


