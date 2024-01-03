export const countriesCarouselSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 11,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 11,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 9,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 7,
        arrows: false,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 5,
        arrows: false,
        dots: false,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 4,
        arrows: false,
        dots: false,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 3,
        arrows: false,
        dots: false,
      },
    },
  ],
};
