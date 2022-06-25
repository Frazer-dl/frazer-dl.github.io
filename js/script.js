$(document).ready(function() {
    $(".carousel__inner").slick({
        speed: 500,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_next.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  arrows: false
                }
              }
        ]
      });
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header'),
  menuItem = document.querySelectorAll('.header__item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('header_active');
      })
  })
})


function toggleSlide(item) {
  $(item).each(function(i) {
      $(this).on('click', function(e) {
          e.preventDefault();
          $('.ideas-item__content').eq(i).toggleClass('ideas-item__content_active');
          $('.ideas-item__descr').eq(i).toggleClass('ideas-item__descr_active');
      })
  });
};

toggleSlide('.ideas-item__link');
toggleSlide('.ideas-item__back');

// Modal

$('[data-modal=device-info]').on('click', function() {
    $('.overlay, #device-info').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #device-info').fadeOut('slow');
});

$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#device-info .modal__subtitle').text($('row td').eq(i).text());
        $('.overlay, #device-info').fadeIn('slow');
    })
});