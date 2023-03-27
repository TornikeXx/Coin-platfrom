import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-grid">
                <div className="footer-media">
                    <h3> <i className="fa-brands fa-figma" /> Full Circle</h3>
                    <p>Full circle is a leading platform for your coin and cryptocurrencies online.</p>
                    <i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-github"></i>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <p>Company</p>
                    <p>Our Blog</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
                <div className="footer-social">
                    <h3>Subscribe Us</h3>
                    <input type="email" placeholder='example@coinhub.com' />

                    <button>Subscribe</button>
                    <p>We wont span you ever</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

