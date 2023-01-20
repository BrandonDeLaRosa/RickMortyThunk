import React from 'react';
import { Spinner } from 'react-bootstrap';
import RmLoader from '../assets/rMLoader.jpg';

const Loading = () => {
    return (
        <div className='loader'>
            {/* <Spinner className='spinner' animation="grow" /> */}
            <img className='spinner' src={RmLoader} alt="" />
        </div>
    );
};

export default Loading;