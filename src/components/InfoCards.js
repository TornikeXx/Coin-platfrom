import React from 'react'
import './InfoCards.css'
import Pic1 from '../assets/pic1.png'
import Pic2 from '../assets/pic2.png'
import Pic3 from '../assets/pic3.png';

const InfoCards = () => {
    return (
        <>
            <div className="cards-grid">
                <div className="cards">
                    <h1>25+</h1>
                    <h3>Operating countries with transictions</h3>
                </div>
                <div className="cards">
                    <h1>24/7</h1>
                    <h3>Our support team is always ready to help</h3>
                </div>
                <div className="cards">
                    <h1>60+</h1>
                    <h3>Coin types avalible in one roof for you</h3>
                </div>
            </div>
            <div className='tittle'>
                <h1>All Markets, everything you need to trade coins online in one place</h1>
                <p>We keep everything centralized so that you can just focus on your transactions.</p>
            </div>
            <div className='payment-grid'>
                <div className='payment-card'>
                    <img src={Pic1} alt="" />
                    <h2>Fast Updating Market</h2>
                    <p>We keep everything centralized so that you can just focus on your transactions</p>
                </div>
                <div className='payment-card'>
                    <img src={Pic2} alt="" />
                    <h2>Safe Transactions</h2>
                    <p>We keep everything centralized so that you can just focus on your transactions</p>
                </div>
                <div className='payment-card'>
                    <img src={Pic3} alt="" />
                    <h2>Worldwide Payment</h2>
                    <p>We keep everything centralized so that you can just focus on your transactions</p>
                </div>
            </div>
        </>
    )
}

export default InfoCards
