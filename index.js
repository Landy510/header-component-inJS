document.addEventListener("DOMContentLoaded", function(event) {
  const optionArr = [...document.querySelectorAll('.header-option')]
  optionArr.forEach(option => {
    option.addEventListener('mouseover', (evt) => {
      evt.stopPropagation();
      const isActive = [...evt.target.offsetParent.classList].find(className => className === 'header-option-active')
      if(!isActive) evt.target.offsetParent.classList.add('header-option-active');
    }, false)

    option.addEventListener('mouseleave', (evt) => {
      evt.stopPropagation();
      const isActive = [...evt.target.classList].find(className => className === 'header-option-active')
      if(isActive) evt.target.classList.remove('header-option-active');
    }, false)
  })
});