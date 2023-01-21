import React from 'react';
import RMSpinner from '../assets/rickMortySpinner.png'

const Loading = () => {
    return (
        <div className='loader'>
            <img className='spinner2' src={RMSpinner} alt="" />
        </div>
    );
};

export default Loading;