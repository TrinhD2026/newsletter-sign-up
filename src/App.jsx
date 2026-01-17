import { useState } from 'react'
import mobileSignUpImg from './assets/images/illustration-sign-up-mobile.svg'
import tabletSignUpImg from './assets/images/illustration-sign-up-tablet.svg'
import desktopSignUpImg from './assets/images/illustration-sign-up-desktop.svg'
import './App.css'

function App() {

    return (
        <>
            <div className="main-container">
                <div className="subscribe-container">
                    <picture>
                        <source srcset={mobileSignUpImg} media="(max-width: 48rem)" />
                        <source srcset={tabletSignUpImg} media="(max-width: 56rem)" />
                        <source srcset={desktopSignUpImg} media="(min-width: 56rem)" />
                        <img src={mobileSignUpImg} className="sign-up-img" alt="sign up logo"/>
                    </picture>
                </div>
                <div className="confirm-container">

                </div>
            </div>

        </>
    )
}

export default App
