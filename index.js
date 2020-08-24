const titleELement = document.querySelector('h1');
const textElement = document.querySelector('.text');
const progressbarElement = document.getElementById('progressbar');

titleELement.addEventListener('click', event => {
    textElement.classList.toggle('active');
});

textElement.addEventListener('transitionend', event => {
    console.log('done');
})

let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(event) {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progressbarElement.style.height = `${progressHeight}%`;
}