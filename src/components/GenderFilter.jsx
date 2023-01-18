import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GenderFilter = ({darkMode}) => {

    const [genderFilter, setGenderFilter] = useState([])
    const [page, setPage] = useState(1)
    const [gender, setGender] = useState("male")

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}&gender=${gender}`)
        .then(res => setGenderFilter(res.data))
    },[page, gender])

    // console.log(genderFilter);

    return (
        <div className='characterContainer'>
            <h1>Characters By Gender</h1>
            <div>  
            <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => {setGender("male"), setPage(1)}}>Male</button>
            <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => {setGender("female"), setPage(1)}}>Female</button>
            <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => {setGender("genderless"), setPage(1)}}>Genderless</button>
            <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => {setGender("unknown"), setPage(1)}}>Unknown</button><br />
            </div>
            <h3>Selected Gender: <b>{gender}</b></h3>
            <h3>Total Pages: <b>{genderFilter.info?.pages}</b></h3>

            <div className='NameIdBtnsCont'>
            <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => setPage(page -1)} disabled={page === 1}>Prev Page</button>
            <h3 className='NIPage'><b>{page}</b></h3>
            <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => setPage(page +1)} disabled={page === genderFilter.info?.pages}>Next Page</button>

            </div>
            {
                genderFilter.results?.map(character => (
                    <Link className='nICharacterList' to={`/character/${character.id}`} key={character.id}>
                        <h4 className={darkMode? 'darkNICharacterName' : 'nICharacterName'}>{character.name}</h4>
                        <img src={character.image} alt="" />
                    </Link>   
                ))
            }
        </div>
    );
};

export default GenderFilter;