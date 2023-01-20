import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from '../store/slices/name.slice';

const Home = ({darkMode}) => {
    const [name,setName] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const enterName = () => {
        if(name){
            dispatch(user(name))
            navigate('/locations')
        }else{
            alert("Please log in")
        }
    }

    return (
        <div className='homeContainer' id='home'>
                <div className='homeInfo'>
                    <h1 className='homeTitle'>Home Page</h1>
                    <h2 className='homeTitle2'>Welcome To Rick and Morty´s App.</h2>

                    <h3 className='homeTitle3'>Here you can search over 826 characters and their specific information.
                        As well explore the 126 diferent locations, have fun.
                        </h3>

                    <h2 className='log'>To begging your search, please <b style={{color: "orange"}}>log in!</b></h2>
                </div>
            <form className='homeUserForm' onSubmit={enterName}>

                <div className='homeForm'>
                    <input className={darkMode? "darkHomeInp":'homeInp'} type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Username..." required />
                    <button className={darkMode? "darkHomeBtn":'homeBtn'} onClick={enterName}>Enter</button>
                </div>

            </form>
        </div>
    );
};

export default Home;