
import React from 'react';
import Feature from '../Features/Feature';

const PricingOption = (props) => {
    const { name, price, features } = props.option;
    return (
        <div className='bg-white p-1'>
            <h1 className='bg-red-300 rounded-lg p-4 font-bold text-xl'>
                {name}
            </h1>
            <p>
                <span className='text-4xl font-bold'>{price}</span><span>/mo</span>
            </p>

            <h2 className='text-2xl text-left'>Features:</h2>
            {features.map(feature => <Feature feature={feature}></Feature>)}
        </div>
    );
};

export default PricingOption;