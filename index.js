document.addEventListener("DOMContentLoaded", function(event) {
  const optionArr = [...document.querySelectorAll('.header-option')]
  optionArr.forEach(option => {
    option.addEventListener('mouseleave', (evt) => {
      evt.stopPropagation();
      if(option !== evt.currentTarget) return;
      const isActive = [...evt.target.classList].find(className => className === 'header-option-active')
      if(isActive) evt.target.classList.remove('header-option-active');
    }, false)
  })

  const optionLinkArr = [...document.querySelectorAll('.header-option .header-optionLink')]
  optionLinkArr.forEach(optionLink => {
    optionLink.addEventListener('mouseover', (evt) => {
      const isMobileActive = window.innerWidth <= 961; // While device is in mobile mode, mouseenter event is no need to excute.
      if(isMobileActive) return;
      evt.stopPropagation();
      evt.currentTarget.parentElement.classList.add('header-option-active');
      console.log(evt.currentTarget.parentElement.classList)
    }, false)

    optionLink.addEventListener('click', function(evt) {
      evt.stopPropagation();
      const hasSubMenu = [...this.parentElement.children].find(el => el.className.includes('header-submenu-list'));
      if(!hasSubMenu) return;
      optionLink === evt.currentTarget && evt.currentTarget.parentElement.classList.toggle('header-option-active');
    }, false)
  })

  const mobileMenuBtnArr = [...document.querySelectorAll('.header.mobile .menu-button .toggle-button')];
  mobileMenuBtnArr.forEach(btn => {
    btn.addEventListener('click', (evt) => {
      evt.target.parentElement.parentElement.classList.toggle('mobile-active');
    })
  })
});