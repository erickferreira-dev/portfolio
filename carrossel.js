document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.querySelector('.carrossel');
    const images = document.querySelectorAll('.carrossel img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        const width = images[0].clientWidth;
        carrossel.style.transform = `translateX(${-index * width}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });

    // Ajusta o índice ao redimensionar a janela
    window.addEventListener('resize', () => showImage(currentIndex));
});
