import React from 'react'
import './CostumerCards.css'
import Company1 from '../assets/company1.png'
import Company2 from '../assets/company2.png'
import Company3 from '../assets/company3.png'
import Company4 from '../assets/company4.png'
import Company5 from '../assets/company5.png'
import Company6 from '../assets/company6.png'

const CostumerCards = () => {
    return (
        <div className='page'>
            <div className="main-tittle">
                <h1>Costumers Love it!</h1>
                <p>The final result of our formula at work. check out what our clients have to say about our mobile app and our support team.</p>
            </div>
            <div className="company-grid">
                <div className="company-cards">
                    <div className="card">
                        <img src={Company1} alt="" />
                        <div className='i'>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p>Coinbase is a great product indeed!Everything is just under a roof so its easy. We always use them and its indistinguishable from magic</p>
                    </div>
                    <div className="card">
                        <img src={Company2} alt="" />
                        <div className='i'>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p>Coinbase is a great product indeed!Everything is just under a roof so its easy. We always use them and its indistinguishable from magic</p>
                    </div>
                </div>
                <div className="company-cards-mid">
                    <div className="card">
                        <img src={Company3} alt="" />
                        <div className='i'>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p>Coinbase is a great product indeed!Everything is just under a roof so its easy. We always use them and its indistinguishable from magic</p>
                    </div>
                    <div className="card">
                        <img src={Company4} alt="" />
                        <div className='i'>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p>Coinbase is a great product indeed!Everything is just under a roof so its easy. We always use them and its indistinguishable from magic</p>
                    </div>
                </div>
                <div className="company-cards">
                    <div className="card">
                        <img src={Company5} alt="" />
                        <div className='i'>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p>Coinbase is a great product indeed!Everything is just under a roof so its easy. We always use them and its indistinguishable from magic</p>
                    </div>
                    <div className="card">
                        <img src={Company6} alt="" />
                        <div className='i'>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p>Coinbase is a great product indeed!Everything is just under a roof so its easy. We always use them and its indistinguishable from magic</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CostumerCards
