 window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navBar');
    if (window.scrollY > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
