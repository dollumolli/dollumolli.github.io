$('.menu-icon').on('click', function(e){
    e.preventDefault();
    $('.menu').toggleClass('menu_active') 
    $('.menu-icon').toggleClass('menu-icon_active') 
    $('body').toggleClass('lock') 
})

$(function(){
  $('.shipping').slick(
      {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true
                  
              }
          },
          {
              breakpoint: 767,
              settings: {
                  dots: true,
                  arrows: true,
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  dots: true,
                  arrows: true,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  }
  );
});
$(function(){
  $('.works').slick(
      {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
          {
              breakpoint: 1024,
              settings: {
                  dots: true,
                  arrows: true,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true
                  
              }
          },
          {
              breakpoint: 767,
              settings: {
                  dots: true,
                  arrows: true,
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  dots: true,
                  arrows: true,

                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  }
  );
});