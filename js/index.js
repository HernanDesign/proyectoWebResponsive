/* FUNCIONALIDAD SCROLL NAV BAR*/
function handleScroll() {
    const currentScroll = window.pageYOffset;
    console.log(currentScroll);

  if (currentScroll > SCROLL_THRESHOLD) {
    if (currentScroll > lastScroll) {
      navBar.classList.add('navbar-hidden');
    } else {
      navBar.classList.remove('navbar-hidden');
    }
    
  }

    lastScroll = currentScroll;
  }

  
  const SCROLL_THRESHOLD = 300;
  let lastScroll = 0;
  const navBar = document.querySelector('nav');

  /* CONSULTA DE MEDIOS */

  function initScrollBehavior() {

    const mediaQuery = window.matchMedia('(min-width: 1200px)');


    function handleMediaQueryChange(event) {
      if (event.matches) {

        window.addEventListener('scroll', handleScroll);
      } else {

        window.removeEventListener('scroll', handleScroll);
        navBar.classList.remove('navbar-hidden'); 
      }
    }


    mediaQuery.addEventListener('change', handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery); 
  }

  initScrollBehavior();