import React from 'react';

const Menus = (props) => {
    const { name } = props.data;
    return (
        <li className='text-xl md:mr-5'>
            <a href={name} className="flex justify-center">{name}</a>
            <hr className='md:hidden' />
        </li>
    );
};

export default Menus;