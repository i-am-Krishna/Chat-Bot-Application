import React from 'react'
import './join.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

let user ;

const Join = () => {
const [name,setName] = useState('')
const setData = ()=>{
   user = document.getElementById("join-input").value;
   document.getElementById("join-input").value = "";
}
  return (
    <div className='join-page'>
        <div className='join-container'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAXVBMVEX///9fxL5TwbpZwrxaw7xQwLlpx8L7/v6w4N3h8/KT1dHo9vVgxb+p3drz+vqN08/F6OZ9zsnc8fCBz8q34uByysWe2tbQ7Ou/5ePt9/e24d+r3trL6uhvysSh2tZ3KIHdAAAEGElEQVR4nO3cf5OqIBQG4A1EzczfZe5W3/9jXm2z5SAlNpnBfZ+/7szVGTzB4YC4X18AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwH1pnP+nOj+PY9/Pou26Wbs+7JYfSY5x7fHXR/otxf18v3aw3Oubt868GOOP79dJte4+wfdZhAK5hELv/oDNU9wPQR6FYuo3zKnz2MAK/UYiCpds5o7N43An6KKycHRDNzigCLU+cl27sPIqVaQharHRxPNTjmYCMh12ydItfbmII2vHguxaEWkwMQRcEt4bDWh8Cj3PW4rqqsRsOSzf7lQJtAEQchceiKOrDthS60olFSzf8hfLBA3Lmhxv5kiLSREEclmrxy1VqPvSYZlkQVMMhIVxZUTdqMuDxUXthcFaDxfM3t3UupfLzsvRuwi9i9drsnS2djVoZiPDBxUHu0atjJyZIZZUgRn7ZlF7Oq/e0clZKNxhP9crQcaEj0HmRGywIfXIHs39+3JBuYJTnlVvsrxa39Ec1WgfReoJZv8/qk9/00ZQgOZGbtvO2cHbKYsnwLrLKtH4wkG7NDLuBMp/aXjCTic4sG3QO5DZ9ZW0NXyr7eGl8WyLHwGQ+/WAJGdgTZnq5/0yI3Scq5HQgNuM39EK5I/jzNfANMvlRplS9pMJmVpfLoZwOpuwFkD0HuyeGszys0wk3kqRod6W4l2Own3BjEMsxsPpNNGKAGHS2T+cDeUvN7nzwLc8LU9Y+G3fmhdfUB9zq+uDpOvHHnToxIT/nhC3i3J31AtlGmrJuJLGzfCOJvC1gxrmtcmn/gDyM+Q9KdiHNt14+E5njVp5hgs/IULB9P1HZIjbcEYpJ4Ix3IT9VSN6hmk2PyjuJCVPqZ2ro+xKTwUD34104giDvDHomB4yUw0u2zwoduVQUJgtA5V293UXi1V/J58XjVwdKCBx47dwqbsPboD5oTsphHCe6gVQr3maFu5nxqB5NY46c4u+L/z7D1yn/1l7YpINzaVP2XT5a9jsaLuvGzTZm3orHw2HenIfnE21fLkmuo2G3Ppz606ic7+VJIslK7YdOBlnUFtcjRuSTPs7E7hxmWXYIo1joj207kw9ajad9wu4rz47+fzueMwmhrX+nfsJxC5PlC2dZ8WQQpryw/3jrOyN+LAYOLJn+bPyngmD/0lkWDEogo47gTolwMfaxc//YTL7OkRXDzaYc/76Ni21wLMWtz9j9xlWnHvnq2xPpZQc+qfzrx9FGGy+WyU73v/xuI/CXAtfn3zFh9+vGO4qIaRID90QcKhXRMRWcObRmIOq9z/s/iHIplxnPQ90xg6Q6OzU5UklRbdN8dzqdyijM1i52eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBx/wDzjyJPQn8KCwAAAABJRU5ErkJggg==" alt="Message Logo" />
            <h1>The Boys</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)}  placeholder='Enter your name' id='join-input' className='join-input'/>
            <Link onClick={(e)=> !name ? e.preventDefault(): null} to={'/chat'}>
            <button onClick={setData} className='join-btn'>Enter</button>
            </Link>
        </div>
    </div>
  )
}
export default Join
export {user}