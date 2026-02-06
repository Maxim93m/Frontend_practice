export default function createWelcomePopup(){

    const popup = document.createElement('section');
    const WELCOME_POPUP_KEY = 'WELCOME_POPUP_KEY'

    const flagStoragePopup = JSON.parse(localStorage.getItem(WELCOME_POPUP_KEY));

    if (!flagStoragePopup) {
        const content =
            `<!-- welcome-popup -->
        <section>
            <div class="welcome-popup">
                <div class="welcome-popup__wrapper">
                    <h3 class="title_primary__h3 welcome-popup__wrapper_text">Приветствую! Добро пожаловать на маркетплейс!</h3>
                    <button class="btns_rect welcome-popup__wrapper_btn">Закрыть и больше не показывать</button>
                </div>
            </div>
        </section>`;

        popup.insertAdjacentHTML('afterbegin', content);
        document.body.append(popup);

        const close_btn = document.querySelector('.welcome-popup__wrapper_btn');

        close_btn.addEventListener('click', (event) => {
            localStorage.setItem(WELCOME_POPUP_KEY, JSON.stringify(true));
            popup.remove();
            //  localStorage.clear();
        });
    }

}





