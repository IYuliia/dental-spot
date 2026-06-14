document.getElementById('modalContainer').innerHTML = `
<div class="modal" id="bookingModal">
    <div class="modal__overlay" id="modalOverlay"></div>
    <div class="modal__content">
        <button class="modal__close" id="modalClose">&times;</button>
        <h2 class="modal__title">[ ПОДБАЙМО<br><span>ПРО ВАШУ УСМІШКУ ]</span></h2>
        <form class="modal__form" id="bookingForm" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="950d30e5-a6d5-48df-b556-68225563b9ba">
            <input type="hidden" name="subject" value="Новий запис — Dental Spot">
            <div class="modal__field">
                <label for="name">ІМ'Я ТА ПРІЗВИЩЕ</label>
                <input type="text" id="name" name="name">
            </div>
            <div class="modal__field">
                <label for="service">ТИП ЗВЕРНЕННЯ</label>
                <select id="service" name="service">
                    <option value="" disabled selected>ОБЕРІТЬ ПОСЛУГУ</option>
                    <option value="Консультація">Консультація</option>
                    <option value="Професійна гігієна">Професійна гігієна</option>
                    <option value="Лікування карієсу">Лікування карієсу</option>
                    <option value="Ендодонтичне лікування">Ендодонтичне лікування</option>
                    <option value="Відбілювання">Відбілювання</option>
                    <option value="Брекет-система">Брекет-система</option>
                    <option value="Видалення зуба">Видалення зуба</option>
                    <option value="Коронка">Коронка</option>
                    <option value="Керамічний вінір">Керамічний вінір</option>
                    <option value="Імплантація">Імплантація</option>
                    <option value="Інше">Інше</option>
                </select>
            </div>
            <div class="modal__field">
                <label for="email">EMAIL</label>
                <input type="email" id="email" name="email">
            </div>
            <div class="modal__field">
                <label for="phone">НОМЕР ТЕЛЕФОНУ</label>
                <input type="tel" id="phone" name="phone">
            </div>
            <div class="modal__checkbox">
                <input type="checkbox" id="consent" name="consent">
                <label for="consent">Я погоджуюсь на обробку персональних даних відповідно до політики конфіденційності</label>
            </div>
            <button type="submit" class="btn btn--red modal__submit">Записатись</button>
        </form>
    </div>
</div>
`;