import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StatusCharacters from './StatusCharacters';

const SpeciesFilter = ({darkMode}) => {
    const [speciesFilter, setTypeFilter] = useState([])
    const [page, setPage] = useState(1)
    const [species, setSpecies] = useState("Human")

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}&species=${species}`)
        .then(res  => setTypeFilter(res.data))
    },[page,species])

    // console.log(speciesFilter);
    return (
        <div className='characterContainer' id='species'>
            <h1 className={darkMode? 'darkCharactersNameFilter' : 'charactersNameFilter'}>Characters by Species</h1>
            <div>
                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => { setSpecies("Human"), setPage(1) }}>Human</button>
                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => { setSpecies("Alien"), setPage(1) }}>Alien</button>
                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => { setSpecies("Humanoid"), setPage(1) }}>Humanoid</button>
                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => { setSpecies("unknown"), setPage(1) }}>Unknown</button><br />
            </div>

            <h3>Selected Species: <b>{species}</b></h3>

            <div className='NameIdBtnsCont'>
                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => setPage(page - 1)} disabled={page === 1}>Prev Page</button>
                <h3 className='NIPage'><b>{page}</b></h3>
                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => setPage(page + 1)} disabled={page === speciesFilter.info?.pages}>Next Page</button>
            </div>

            <h3>Total Pages: <b>{speciesFilter.info?.pages}</b></h3> <br />

            <div className='filtersListContainer'>
                {
                    speciesFilter.results?.map(character => (
                        <Link className='nICharacterList' to={`/character/${character.id}`} key={character.id}>
                            <h4 className={darkMode ? 'darkNICharacterName' : 'nICharacterName'}>{character.name}</h4>
                            <img className='filtersImgs' src={character.image} alt="" />
                            <StatusCharacters darkMode={darkMode} character={character} />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default SpeciesFilter;