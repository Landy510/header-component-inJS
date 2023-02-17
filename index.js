document.addEventListener("DOMContentLoaded", function(event) {
  const optionArr = [...document.querySelectorAll('.header-option')]
  optionArr.forEach(option => {
    option.addEventListener('mouseover', (evt) => {
      console.log('enter', evt.currentTarget);
      evt.stopPropagation();
      const isActive = [...evt.currentTarget.offsetParent.classList].find(className => className === 'header-option-active')
      if(!isActive) evt.currentTarget.offsetParent.classList.add('header-option-active');
    }, false)

    option.addEventListener('mouseleave', (evt) => {
      evt.stopPropagation();
      console.log('leave?')
      if(option !== evt.currentTarget) return;
      const isActive = [...evt.target.classList].find(className => className === 'header-option-active')
      if(isActive) evt.target.classList.remove('header-option-active');
    }, false)
    
    option.addEventListener('click', function(evt) {
      console.log('click', window.event.currentTarget);
      const hasSubMenu = [...evt.currentTarget.children].find(el => el.className.includes('header-submenu-list'));
      if(!hasSubMenu) {
        evt.stopPropagation();
        return;
      } // check is the clicked element has submenu element, if no, then there's no need to check for it whether it need to add 'header-option-active' to its class or not.
      hasSubMenu && evt.stopPropagation();
      option === evt.currentTarget && evt.currentTarget.classList.toggle('header-option-active');
    }, false)
  })

  const mobileMenuBtnArr = [...document.querySelectorAll('.header.mobile .menu-button .toggle-button')];
  mobileMenuBtnArr.forEach(btn => {
    btn.addEventListener('click', (evt) => {
      evt.target.parentElement.parentElement.classList.toggle('mobile-active');
    })
  })
});