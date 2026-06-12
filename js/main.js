// ===== MODAL =====
const modal = document.getElementById('bookingModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal() {
    modal.classList.add('is-open');
}

function closeModal() {
    modal.classList.remove('is-open');
    resetForm();
}

const bookBtns = document.querySelectorAll('.book-online-trigger');
bookBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
});

if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
if (modalClose) modalClose.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ===== FORM VALIDATION =====
const form = document.getElementById('bookingForm');

function validateForm() {
    if (!form) return;

    const name = form.querySelector('#name');
    const service = form.querySelector('#service');
    const email = form.querySelector('#email');
    const phone = form.querySelector('#phone');
    const consent = form.querySelector('#consent');
    const submitBtn = form.querySelector('.modal__submit');

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    const phoneValid = phone.value.replace(/\D/g, '').length >= 10;

    // Only show red/green if the field has been touched
    function markField(el, isValid) {
        if (el.value.trim() === '' && !el.classList.contains('touched')) return;
        el.classList.toggle('valid', isValid);
        el.classList.toggle('invalid', !isValid);
    }

    markField(name, name.value.trim().length > 0);
    markField(service, service.value !== '');
    markField(email, emailValid);
    markField(phone, phoneValid);

    const allFilled = name.value.trim() && service.value && email.value.trim() && phone.value.trim();
    const isValid = allFilled && emailValid && phoneValid && consent.checked;

    submitBtn.disabled = !isValid;
    submitBtn.style.opacity = isValid ? '1' : '0.5';
    submitBtn.style.cursor = isValid ? 'pointer' : 'not-allowed';
}

function resetForm() {
    if (!form) return;
    form.reset();
    form.querySelectorAll('input, select').forEach(el => {
        el.classList.remove('touched', 'valid', 'invalid');
    });
    validateForm();
}

if (form) {
    form.querySelectorAll('input, select').forEach(el => {
        el.addEventListener('input', validateForm);
        el.addEventListener('change', validateForm);
    });

    validateForm();

    // ===== FORM SUBMIT =====
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.modal__submit');
        submitBtn.textContent = 'Надсилаємо...';
        submitBtn.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                submitBtn.textContent = 'Записатись';
                closeModal();
                showSuccess();
            } else {
                submitBtn.textContent = 'Записатись';
                submitBtn.disabled = false;
                alert('Щось пішло не так. Спробуйте ще раз.');
            }
        } catch (err) {
            submitBtn.textContent = 'Записатись';
            submitBtn.disabled = false;
            alert('Помилка з\'єднання. Спробуйте ще раз.');
        }
    });

    form.querySelectorAll('input, select').forEach(el => {
    el.addEventListener('blur', () => {
        el.classList.add('touched');
        validateForm();
    });
});
}

// ===== SUCCESS MESSAGE =====
function showSuccess() {
    const msg = document.createElement('div');
    msg.className = 'success-toast';
    msg.textContent = 'Дякуємо! Ми зв\'яжемося з вами найближчим часом.';
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 4000);
}