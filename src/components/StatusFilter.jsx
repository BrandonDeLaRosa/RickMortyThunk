import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StatusCharacters from './StatusCharacters';

const StatusFilter = ({darkMode}) => {
// ------------------------------------------------------------------- Filtered Search status, spicies.

    const [filterSearch, setFilterSearch] = useState([])
    const [page,setPage] = useState(1)
    const [status, setStatus] = useState("alive")

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}&status=${status}`)
        .then(res => setFilterSearch(res.data))
    },[page,status])

    // console.log(filterSearch.results);

    return (
        <div className='characterContainer' id='status'>
            <h1 className={darkMode? 'darkCharactersNameFilter' : 'charactersNameFilter'}>Character by Status</h1>
            <div>
                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => { setStatus("alive"), setPage(1) }}>Alive</button>
                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => { setStatus("dead"), setPage(1) }}>Dead</button>
                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => { setStatus("unknown"), setPage(1) }}>Unknown</button> <br />
            </div>
            <h3>Selected Status: <b>{status.toUpperCase()}</b></h3>

            <div className='NameIdBtnsCont'>
                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => setPage(page - 1)} disabled={page === 1}>Prev Page</button>
                <h3 className='NIPage'><b>{page}</b></h3>
                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={() => setPage(page + 1)} disabled={Number(page) === filterSearch.info?.pages}>Next Page</button>
            </div> <br />
            <h3>Total pages: <b>{filterSearch.info?.pages}</b></h3> <br />
        
            <div className='filtersListContainer'>
                {
                    filterSearch.results?.map(character => (
                        <Link className='nICharacterList' to={`/character/${character.id}`} key={character.id}>
                            <h4 className={darkMode ? 'darkNICharacterName' : 'nICharacterName'}>{character.name} </h4>
                            <img className='filtersImgs' src={character.image} alt="" />
                            <StatusCharacters darkMode={darkMode} character={character} />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default StatusFilter;
















// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { statusFilterThunk } from '../store/slices/characters.slice';

// const StatusFilter = () => {
//     const dispatch = useDispatch();
//     const [page, setPage] = useState(1)
//     const [status, setStatus] = useState("alive")


//     useEffect(() => {
//         dispatch(statusFilterThunk(page,status))
//     },[])
//     return (
//         <div>
//             <h1>Character Status</h1>

//         </div>
//     );
// };

// export default StatusFilter;