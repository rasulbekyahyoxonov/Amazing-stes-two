
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
        const c = +counter.innerText;

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