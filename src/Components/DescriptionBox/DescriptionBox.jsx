import React from 'react'
import "./DescriptionBox.css"
const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
        <div className="descriptionBox-navigator">
            <div className="descriptionBox-nav-box">Description</div>
            <div className="descriptionBox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionBox-description">
            <p>An ecommerce app—sometimes referred to as a mobile commerce app—is a piece of software that allows customers to browse and purchase items from an ecommerce store. Mobile commerce apps are beneficial for both business owners and their customers.</p>
            <p> Brands can better engage their customers in a dedicated space and customers can personalize and control their experience. And thanks to platforms like Shopify, the mobile app development process can be pretty painless, too.</p>
        </div>
    </div>
  )
}

export default DescriptionBox