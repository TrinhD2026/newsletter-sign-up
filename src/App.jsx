import { useState } from 'react'
import mobileSignUpImg from './assets/images/illustration-sign-up-mobile.svg'
import tabletSignUpImg from './assets/images/illustration-sign-up-tablet.svg'
import desktopSignUpImg from './assets/images/illustration-sign-up-desktop.svg'
import './App.css'

function App() {

    return (
        <>
            <h1 hidden aria-hidden="true">Newsletter Subsription</h1>
            <div className="main-container">
                <form className="subscribe-container">
                    <div className="background-container"></div>
                    <div className="info-container">
                        <h2>Stay Updated!</h2>
                        <p>Join 60,000+ product managers receiving monthly updates on:</p>
                        <ul className="list">
                            <li className="list-item">Product discovery and building what matters</li>
                            <li className="list-item">Measuring to ensure updates are a success</li>
                            <li className="list-item">And much more!</li>
                        </ul>
                        <div className="input-cotainer">
                            <label className="label" id="email-label" htmlFor="email">Email address</label>
                            <input className="input email" type="email" id="email" />
                        </div>
                        <button type="submit" className="submit-btn">Subsrcibe to monthly newsletter</button>
                    </div>
                </form>
                <div className="confirm-container">

                </div>
            </div>

        </>
    )
}

export default App
