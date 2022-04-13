import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Feature = (props) => {
    console.log(props);
    return (
        <div>
            <div className='flex'>
                <CheckCircleIcon className='w-6 h-6 text-red-500'></CheckCircleIcon>
                <p>{props.feature}</p>
            </div>
        </div>
    );
};

export default Feature;