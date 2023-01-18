import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Residents = ({url,darkMode}) => {

    const [resident, setResident] = useState({})
    
    useEffect(() => {
        axios.get(url)
         .then(res => setResident(res.data))
    },[])

    console.log(resident);

    return (
        <div className='locInfChaCardContainer'>
            <Link className='locInfChaCard' to={`/character/${resident.id}`}>
                <img  className='locInfCardImg' src={resident.image} alt="" />
                <h4 className={darkMode? 'darkLocInfCardNme' : 'locInfCardNme'}>  {resident.name}</h4>
            </Link>
        </div>
    );
};

export default Residents;