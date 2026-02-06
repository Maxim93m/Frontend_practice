import React from "react";
import './welcome-popup.css';

function WelcomePopup() {

    const WELCOME_POPUP_KEY = 'WELCOME_POPUP_KEY'
    const flagStorageKey = JSON.parse(localStorage.getItem(WELCOME_POPUP_KEY));
    
    if (!flagStorageKey) {
        return (
            <>

                <section className="welcome-section">
                    <div className="welcome-block-list">
                        <h1 className="welcome-title">Добро пожаловать!</h1>
                        <p className="welcome-descr">Салон красоты «Delote-Beauty» на Крестовском</p>
                        <button onClick={() => {
                            localStorage.setItem(WELCOME_POPUP_KEY, JSON.stringify(true));
                            document.querySelector('.welcome-section').remove();
                        }
                        }
                            className="close-welcome-popup-btn">Закрыть</button>
                    </div>
                </section>
            </>
        );
    }
}

export default WelcomePopup;