import React, { useState, useEffect } from 'react';
import './Navbar.css'

function Navbar(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-links">
            <div className="logo">
                <a href="www.google.com">Chat GPT</a>
            </div>
            <div className="links">
                <a href="#Home">Home</a>
                <a href="#About">What is Chat GPT?</a>
                <a href="#Achivements">Open AI</a>
                <a href="#Projects">Case Studies</a>
                <a href="#Contacts">Library</a>
            </div>
        </div>
        <div className="navbar-signIn-signUp">
            <div className='signin-signup'>
            <p>Sign in</p>
            <button type="button" className="button-type-1">Sign up</button>
            </div>
        </div>
    </div>
}

export default Navbar ;
