import React from 'react'
import './Pricing.css'

const Pricing = () => {
    return (
        <>
            <div className='pricing-title'>
                <h1>Transparent Pricing</h1>
                <p>Thousands of developers around the world have already made Coinhub a loving marketplace of their choice</p>
            </div>
            <div className="pricing-grid">
                <div className="pricing-card">
                    <div className="top">
                        <h1>$47</h1>
                        <p>Standart license</p>
                    </div>
                    <hr />
                    <div className="bottom">
                        <div className="p-tag">
                            <p>1 end user</p>
                            <p>Use for personal use</p>
                            <p>Use in a free end product</p>
                            <p>6 months technical support free</p>
                            <p>Free supervision and follow up</p>
                        </div>
                        <div className="pricing-button">
                            <button>Learn more</button>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="top">
                        <h1>$47</h1>
                        <p>Standart license</p>
                    </div>
                    <hr />
                    <div className="bottom">
                        <div className="p-tag">
                            <p>1 end user</p>
                            <p>Use for personal use</p>
                            <p>Use in a free end product</p>
                            <p>6 months technical support free</p>
                            <p>Free supervision and follow up</p>
                        </div>
                        <div className="pricing-button">
                            <button>Learn more</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Pricing
