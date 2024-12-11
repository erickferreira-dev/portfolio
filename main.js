document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const agendarButton = document.getElementById('agendarButton');
    const closeModal = document.querySelector('.modal .close');
    const videoApresentacao = document.getElementById('videoApresentacao');

    agendarButton.addEventListener('click', () => {
        modal.style.display = 'flex';
        if (!videoApresentacao.paused) {
            videoApresentacao.pause();
        }
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
