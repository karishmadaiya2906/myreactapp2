document.querySelector('.prev').addEventListener('click', () => {
    document.querySelector('.carousel').scrollBy({
        left: -document.querySelector('.carousel-item').offsetWidth,
        behavior: 'smooth'
    });
});

document.querySelector('.next').addEventListener('click', () => {
    document.querySelector('.carousel').scrollBy({
        left: document.querySelector('.carousel-item').offsetWidth,
        behavior: 'smooth'
    });
});
