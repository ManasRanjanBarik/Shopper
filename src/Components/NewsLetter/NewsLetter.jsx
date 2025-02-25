import React from 'react'
import "./NewsLetter.css";
export const NewsLetter = () => {
  return (
    <div className="newsLetter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>SUbscribe to our newsletter and stay updayted</p>
        <div>
            <input type="email" placeholder="Your email id" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
