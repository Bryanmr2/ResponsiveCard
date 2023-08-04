import React, { useState } from 'react';
import IconListSvg from "./assets/images/icon-list.svg";
import IllustrationMobileSvg from "./assets/images/illustration-sign-up-mobile.svg";
import Thanks from './Thanks.jsx';

const App = () => {
    const [showThanks, setShowThanks] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [inputError, setInputError] = useState('input');

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleEmailClick = () => {
        if (validateEmail(email)) {
            setShowThanks(true);
        } else {
            setEmailError('Valid email required');
            setInputError('inputRed')
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError('');
        setInputError('input')
    };


    return (
        <>
            {showThanks ? (
                <Thanks />
            ) : (
                <div className='container'>
                    <div className='card'>
                        <div className='cardImage'>
                            <img className='image' src={IllustrationMobileSvg} alt="Illustration" />
                        </div>

                        <div className='cardContent'>
                            <h1>Stay updated!</h1>
                            <p>Join 60,000+ product managers receiving monthly updates on:</p>

                            <div className='benefit'>
                                <img src={IconListSvg} alt="Icon" />
                                <p>Product discovery and building what matters</p>
                            </div>
                            <div className='benefit'>
                                <img src={IconListSvg} alt="Icon" />
                                <p>Measuring to ensure updates are a success</p>
                            </div>
                            <div className='benefit'>
                                <img src={IconListSvg} alt="Icon" />
                                <p>And much more!</p>
                            </div>
                            <div className='emailDescription'>
                                <h5>Email address</h5>
                                {emailError && <h5 className="error">{emailError}</h5>}
                            </div>

                            <div className='email'>
                                <input className={inputError} type='text' placeholder="email@company.com" value={email} onChange={handleEmailChange} />

                                <button type='button' onClick={handleEmailClick}>
                                    Subscribe to monthly newsletter
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};

export default App;