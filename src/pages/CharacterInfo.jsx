import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacterInfo } from '../store/slices/characterInfo.slice';
import "./styles/characterInfo.css"

const CharacterInfo = ({darkMode}) => {

    const characterInfo = useSelector(state => state.characterInfo)
    const name = useSelector(state => state.name)
    const dispatch = useDispatch()
    const {id} = useParams();
    const navigate = useNavigate()

    const prevCha = () => {
        navigate(`/character/${(characterInfo.id) - 1}`)
    }
    const NextCha = () => {
        navigate(`/character/${(characterInfo.id) + 1}`)
    }

    useEffect(() => {
        dispatch(getCharacterInfo(id))
    },[id])

  
    
    return (
        <div className='characterInfoContainer'>
            <h1>Characters Info</h1>
            <h2><b style={{color: "orange"}}>{name ? name : "Please log in!"}´s</b> {name ? "session." : ""} </h2> <br />
            <div>
                <h3> <b className={darkMode ? 'darkLIData' : 'lIdata'}>Name: </b> {characterInfo?.name}</h3>
                <h3> <b className={darkMode ? 'darkLIData' : 'lIdata'}>Origin in space: </b> {characterInfo?.origin?.name ? characterInfo?.origin?.name : "Unknown"}</h3>
                <h3> <b className={darkMode ? 'darkLIData' : 'lIdata'}>Actual location: </b> {characterInfo?.location?.name}</h3>
                <h3> <b className={darkMode ? 'darkLIData' : 'lIdata'}>Status: </b> {characterInfo?.status}</h3>
                <h3> <b className={darkMode ? 'darkLIData' : 'lIdata'}>Species: </b> {characterInfo?.species}</h3>
                <h3> <b className={darkMode ? 'darkLIData' : 'lIdata'}>Type: </b> {characterInfo?.type ? characterInfo?.type : "Unknown"}</h3>
                <h3> <b className={darkMode ? 'darkLIData' : 'lIdata'}>Gender: </b> {characterInfo?.gender}</h3>
                <h3> <b className={darkMode ? 'darkLIData' : 'lIdata'}>No. of episodes </b> {characterInfo?.episode?.length}</h3>
            </div> <br />
            <img src={characterInfo.image} alt="CharacterImage" /> <br />

            <div className='NameIdBtnsCont'>
                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={prevCha} disabled={Number(id) === 1}>Prev Character</button>
                <h3 className='NIPage'><b>{id}</b></h3>
                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={NextCha} disabled={Number(id) === 826}>Next Character</button>
            </div>
        </div>
    );
};

export default CharacterInfo;

// const [characterInfo, setCharacterInfo] = useState({})

// useState(() => {
//     axios.get("https://rickandmortyapi.com/api/character/2")
//      .then(res => setCharacterInfo(res.data))
// }, [])

// console.log(characterInfo);npm run dev