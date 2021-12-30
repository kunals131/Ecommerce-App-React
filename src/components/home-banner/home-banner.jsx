import React from 'react'
import './home-banner.scss'
import HomeImage from '../../assets/model-1.png'

const HomeBanner = () => {
    return (
        <div>
            <div className="home-banner">
                <div className="home-banner__left">
                    <h1 className="heading">Winter 21'</h1>
                    <p className="sub-heading">Grad the latest Winter Sale Collection with 30% Off and other special discounts</p>
 
                    <p className="price">Price : <span>1789$ </span></p>
                    <div className="shop-button-container">
                    <button className="shop-button">Shop Now!</button>
                    </div>
                </div>
                <div className="home-banner__right">
                   <img src={HomeImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
