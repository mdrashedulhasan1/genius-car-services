import React from 'react';
import './Service.css';
const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
        </div>
    );
};

export default Service;