// Scrollreveal.js

//Jumbotron
// Meet Hilary.
ScrollReveal().reveal('.headline', { 
    delay: 250,
    origin: 'top',
    distance: '200px',
    easing: 'ease-in'
});

// Bio
ScrollReveal().reveal('.lead-bio', { 
    delay: 1750,
    origin: 'left',
    distance: '200px',
    easing: 'ease-in'
});

// Profile Picture
ScrollReveal().reveal('.hilpic', { 
    delay: 1750,
    origin: 'right',
    distance: '200px',
    easing: 'ease-in'
});

// Portfolio Section
ScrollReveal().reveal('.album1', {
    delay: 1750,
    distance: '500px',
    opacity: 0.0,
    easing: 'ease-in'
});

//Resume Section
ScrollReveal().reveal('.album2', {
    delay: 300,
    duration: 750,
    distance: '500px',
    opacity: 0.0,
    easing: 'ease-in'
});

// Cards
// https://codepen.io/jlmakes/pen/YOrjOd
// https://www.youtube.com/watch?v=ePgnR4gHIi4

var cardSlide = {
    opacity: 0.0,
    duration: 1500,
    interval: 30,
    reset: true
};

ScrollReveal().reveal('.card', {
    interval: 30,
    opacity: 0.0,
	reset: true
});

ScrollReveal().reveal('.card-img-top', cardSlide);
ScrollReveal().reveal('.card-title', cardSlide);
ScrollReveal().reveal('.card-text', cardSlide);
ScrollReveal().reveal('.btn-group', cardSlide);
ScrollReveal().reveal('.card-header', cardSlide);

// Add some movement to the buttons
ScrollReveal().reveal('.btn-group', {
    rotate: {
        x: 20,
        z: 20
    }
});
