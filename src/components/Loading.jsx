import React from 'react';
import { Spinner } from 'react-bootstrap';
import RmLoader from '../assets/rMLoader.jpg';
import RMSpinner from '../assets/rickMortySpinner.png'

const Loading = () => {
    return (
        <div className='loader'>
            {/* <Spinner className='spinner' animation="grow" /> */}
            {/* <img className='spinner' src={RmLoader} alt="" /> */}
            <img className='spinner2' src={RMSpinner} alt="" />
        </div>
    );
};

export default Loading;