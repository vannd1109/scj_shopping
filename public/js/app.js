let modal = document.querySelector('#scj-modal');
// modal.classList.add('show');
  // slide
  let slideIndex = 1;
  showSlides(slideIndex);
  console.log("OK");

  function plusSlides(n){
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("scj-slide-item");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].classList.remove('show');
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].classList.add('show');
        dots[slideIndex-1].className += " active show";
      }

      document.addEventListener("DOMContentLoaded", function(event) { 
        let scj_popover = document.querySelectorAll('.scj-popover'),
        menu_bar_link = document.querySelectorAll('.menu-bar-link');

  // show hidden notification and login

  for (let i = 0; i < scj_popover.length; i++) {
    let count = 0; 
    scj_popover[i].addEventListener('click', function(){
      count++;
      for (let j = 0; j < scj_popover.length; j++) {
        // scj_popover[j].nextElementSibling.classList.add('hidden');
        scj_popover[j].nextElementSibling.classList.remove('show');
      }

      if(count % 2 !== 0){
       scj_popover[i].nextElementSibling.classList.add('show');
     }else{
       scj_popover[i].nextElementSibling.classList.remove('show');
     }
      // scj_popover[i].nextElementSibling.classList.remove('hidden');
    });
  }

  // show menu
  for (let i = 0; i < menu_bar_link.length; i++) {
    menu_bar_link[i].addEventListener('mouseover', function(){
      if(menu_bar_link[i].nextElementSibling !== null){
        menu_bar_link[i].nextElementSibling.style.display = "block";
      }
    });
  }
  for (let i = 0; i < menu_bar_link.length; i++) {
    menu_bar_link[i].addEventListener('mouseout', function(){
      if(menu_bar_link[i].nextElementSibling !== null){
        menu_bar_link[i].nextElementSibling.style.display = "none";
      }
    });
  }

  // event

  let events = document.querySelectorAll('.scj-event-item');
  for (let i = 0; i < events.length; i++) {
    if(i % 2 !== 0){
      events[i].classList.add('right');
    }else{
      events[i].classList.add('left');
    }
  }

  // modal
  let modal_show = document.querySelectorAll('.scj-modal-show'),
  modal_close = document.querySelector('#modal-close'),
  scj_bg_overlay = document.querySelector('#sci-background-overlay');

  for (let i = 0; i < modal_show.length; i++) {
    modal_show[i].addEventListener('click', () => {
      for (let j = 0; j < scj_popover.length; j++) {
        scj_popover[j].nextElementSibling.classList.remove('show');
      }
      modal.classList.add('show');
      scj_bg_overlay.classList.add('show');
    });
  }

  modal_close.addEventListener('click',() => {
    modal.classList.remove('show');
    scj_bg_overlay.classList.remove('show');
  });
  scj_bg_overlay.addEventListener('click',() => {
    modal.classList.remove('show');
    scj_bg_overlay.classList.remove('show');
  });

});