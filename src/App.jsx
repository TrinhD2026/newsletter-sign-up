import {useState} from 'react';
import reactLogo from '/src/assets/images/icon-success.svg';
import './App.css';

function App() {
    const [email,setEmail]=useState("");
    const [isConfirmVisible,setisConfirmVisible]=useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setisConfirmVisible(true);
    }

    function handleDismiss() {
        setisConfirmVisible(false);
        setEmail("");
    }
    return (
        <>
            <div className="main-container">
                {
                    !isConfirmVisible&&
                    <form className="subscribe-form" onSubmit={handleSubmit}>
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
                                <input className="input email" type="email" id="email" value={email} onInput={(event) => setEmail(event.target.value)} />
                            </div>
                            <button type="submit" className="btn submit-btn">Subsrcibe to monthly newsletter</button>
                        </div>
                    </form>
                }
                {
                    isConfirmVisible &&
                    <div className="confirm-container">
                        <div className="confirm-message">
                            <img src={reactLogo} className="logo react" alt="React logo" />
                            <h2>Thanks for subscribing!</h2>
                            <p>A confirmation has been sent to your {email}. Please open it and click the button inside to confirm the subscription</p>
                        </div>
                        <button type="button" className="btn dismiss-btn" onClick={handleDismiss}>Dismiss message</button>
                    </div>
                }
                
            </div>

        </>
    )
}

export default App
