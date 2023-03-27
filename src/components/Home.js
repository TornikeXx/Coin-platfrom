import React from 'react'
import './Home.css'
import Img1 from '../assets/squares.png'

function Home() {
    return (
        <div className='home'>
            <div className='home-grid'>
                <div className='home-context'>
                    <div className='context'>
                        <h3>-All rounder team</h3>
                        <h1>All insights from a single marketing <span>Coin Platfrom</span></h1>
                        <h2>We deal with sophiticated system engineering to keep uptades to the current coin industry</h2>
                        <button>learn more</button>
                    </div>
                </div>
                <div className='home-image'>
                    <img src={Img1} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Home
