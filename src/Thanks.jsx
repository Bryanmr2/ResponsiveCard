import React, {useState} from 'react'
import IconListSvg from "./assets/images/icon-list.svg"
import "./style.css"
import App from './App.jsx'

export const Thanks = () => {

  const [app, setApp] = useState(false);

  const handleClick = () => {
    setApp(true);
  };

  return (

    <>
    {app ? ( <App /> ) : (
    <div className='container'>
      <div className='thanksCard'>
        <img className='largeIcon' src={IconListSvg} />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to {""}
          <span style={{ fontWeight: "bold" }}>
             ash@lorecompany.com. {""}
          </span>
          Please open it and click the button inside to confirm your subscription.
        </p>
        <button className='button' onClick={handleClick}>
          Dismiss message
        </button>
      </div>
    </div>
    )}
    </>
  )
}

export default Thanks;