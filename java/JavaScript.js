
//  Scroolbar

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - 
    window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / 
    totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

// Counter number 

const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0';
    
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = + counter.innerText;

        const increment = target / 250;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 20);
        }
        else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// Scroll Reveal

ScrollReveal ({
    reset: false,
    distance: '80px',
    duration: 1000
});

ScrollReveal().reveal('.explore',{delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.carddiv1',{delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.carddiv2',{delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.carddiv3',{delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.carddiv4',{delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.top-destination',{delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.bottom-destination',{delay: 600, origin: 'bottom'});
ScrollReveal().reveal('#bottom-packages',{delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.counter-div',{delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.flex-corusel',{delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.articles-flex',{delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.newsletter-div',{delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.flex-footer',{delay: 200, origin: 'bottom'});