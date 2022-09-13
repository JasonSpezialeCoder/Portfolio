// splide js 

var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 3,
  perMove: 1,
  arrows: true,
  paginationDirection: false,
  pagination: false,
  gap: 30,
  
  breakpoints: {
    600: {
			perPage: 1,
		},
    1000: {
			perPage: 2,
		},
		900: {
			perPage: 2,
		},
  },
} );


splide.mount();

// splide js 

var splide = new Splide( '#splide-2', {
  type   : 'loop',
  perPage: 3,
  perMove: 1,
  arrows: true,
  paginationDirection: false,
  pagination: false,
  gap: 30,
  
  breakpoints: {
    600: {
			perPage: 1,
		},
    1000: {
			perPage: 2,
		},
		900: {
			perPage: 2,
		},
  },
} );


splide.mount();

// form 

var redirect = document.getElementById('redirect');
redirect.value = new URL('success.html', location).href;