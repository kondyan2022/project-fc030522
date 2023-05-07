(() => {
  const refs = {
    openMobileBtn: document.querySelector('[data-mobile-open]'),
    closeMobileBtn: document.querySelector('[data-mobile-close]'),
    mobile: document.querySelector('[data-mobile]'),
    links: document.querySelectorAll('a.burger-menu-navigation-link'),
  };

  refs.openMobileBtn.addEventListener('click', toggleMobile);
  refs.closeMobileBtn.addEventListener('click', toggleMobile);
  refs.links.forEach(a => a.addEventListener('click', toggleMobile));

  function toggleMobile() {
    refs.mobile.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
