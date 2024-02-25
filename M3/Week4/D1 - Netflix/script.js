const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 20,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  const watchCarousel = (carousels) => {
    carousels.forEach(carousel => {
      // if (carousel.isIntersecting) {
      //   console.log(carousel)
      //   carousel.target.classList.add("container-enter-animation");
      //   carousel.target.classList.remove("container-hidden");
      // }
      // else {
      //   console.log("elemento è uscito dalla viewport");
      //   carousel.target.classList.remove("container-enter-animation");
      //   carousel.target.classList.add("container-hidden");
      // }
      if (carousel.boundingClientRect.top > 0 && carousel.isIntersecting) {
        carousel.target.classList.add("container-enter-animation");
        carousel.target.classList.remove("container-hidden");
      } else if (carousel.boundingClientRect.top < 0 && carousel.isIntersecting) {
        carousel.target.classList.add("container-exit-animation");
        carousel.target.classList.remove("container-hidden");
      } else {
        carousel.target.classList.add("container-hidden");
        carousel.target.classList.remove("container-enter-animation");
        carousel.target.classList.remove("container-exit-animation");
      }
    })
  }

  const carousels = document.querySelectorAll(".movie-carousel");
  const observer = new IntersectionObserver(watchCarousel, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3, 
  })

  carousels.forEach(carousel => {
    observer.observe(carousel)
  })


  