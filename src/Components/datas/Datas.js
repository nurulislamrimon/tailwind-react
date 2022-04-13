import React from 'react';

const Datas = (props) => {
    const { name } = props.data;
    return (
        <div>
            <li className='text-xl mr-5'>{name}</li>
        </div>
    );
};

export default Datas;