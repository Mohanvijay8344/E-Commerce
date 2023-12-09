import React from 'react';
import "./NewsLetter.css"

function NewsLetter() {
    return (
        <div className='NewsLetter'>
            <h1>Get Exclusive Offers on Your Email</h1>
            <p>Subscribe to our Newsletter and Stay updated</p>
            <div>
                <input type="email" placeholder='Enter Your Email'/>
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;