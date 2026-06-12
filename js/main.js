// ===== MODAL =====
const modal = document.getElementById('bookingModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

const bookBtns = document.querySelectorAll('.book-online-trigger');

bookBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('is-open');
        // document.body.style.overflow = 'hidden';
    });
});

modalOverlay.addEventListener('click', () => {
    modal.classList.remove('is-open');
    // document.body.style.overflow = '';
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('is-open');
    // document.body.style.overflow = '';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('is-open');
        // document.body.style.overflow = '';
    }
});
