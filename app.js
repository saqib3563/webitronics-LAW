$('.slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

  });

  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.portfolio-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    autoplaySpeed: 2000,
    dots: false,
    speed: 2500,
    prevArrow: true,
    nextArrow: true,
    prevArrow: '.arrow-left1',
    nextArrow: '.arrow-right1',
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.pricing-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    dots: false,
    autoplaySpeed: 2000,
    prevArrow: true,
    nextArrow: true,
    prevArrow: '.arrow-left1',
   nextArrow: '.arrow-right1',
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.review-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    dots: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
