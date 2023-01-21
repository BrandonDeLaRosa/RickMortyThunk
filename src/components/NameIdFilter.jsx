import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCharactersByIdThunk, getCharactersThunk } from '../store/slices/characters.slice';
import StatusCharacters from './StatusCharacters';


const NameIdFilter = ({darkMode}) => {
    const characters = useSelector(state => state.characters)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [page, setPage] = useState(1)
    const [idSearch, setIdSearch] = useState("")
    const [nameSearch, setNameSearch] = useState("")
    const [nameFilter, setNameFilter] = useState([])

    useEffect(() => {
        dispatch(getCharactersThunk(page))
    }, [page])

    useEffect(() => {
            axios.get(`https://rickandmortyapi.com/api/character?page=${page}&name=${nameSearch}`)
                .then(res => setNameFilter(res.data))
    },[nameSearch,page])

    useEffect(() => {
        if (idSearch !== "") {
            if (idSearch >= 1 && idSearch <= characters.info.pages) {
                dispatch(getCharactersByIdThunk(idSearch))
            } else {
                alert("Sorry, page not found!")
                setIdSearch("")
                navigate('/characters')
                // setPage(1)
            }
        } else if (nameSearch === "" && idSearch === "") {
            // setPage(1)
            dispatch(getCharactersThunk(page))
        }
    }, [ idSearch, page])



    const prevPage = () => {
        setPage(page - 1)
        // setIdSearch("")
    }
    const nextPage = () => {
        setPage(page + 1)
        // setIdSearch("")
    }

    const prevPageName = () => {
        setPage(page - 1)
        // setIdSearch("")
    }
    const nextPageName = () => {
        setPage(page + 1)
        // setIdSearch("")
    }


    const resetId = () => {
        setIdSearch("")
    }


    // console.log(nameFilter);

    return (
        <div className='characterContainer' id='nameId'>
            <h1 className={darkMode? 'darkCharactersNameFilter' : 'charactersNameFilter'}>Characters by Name / id</h1>

            {
                idSearch ?
                    (
                        <>
                            <div className='nameIdSearchCont'>
                                <input className={darkMode ? 'darkNameIdInp' : 'nameIdInp'} type="text" value={idSearch} onChange={e => setIdSearch(e.target.value)} />
                                <button className={darkMode ? 'darkNameIdBtn' : 'nameIdBtn'} onClick={resetId}>Reset</button>
                            </div>

                            {
                                characters.results?.map(character => (
                                    <Link className='nICharacterList' to={`/character/${character.id}`}
                                        key={character.id}>
                                        <h4 className={darkMode? 'darkNICharacterName' : 'nICharacterName'}>{character.name}</h4>
                                        <img className='filtersImgs' src={character.image} alt="" />
                                        <StatusCharacters darkMode={darkMode}  character={character} />
                                    </Link>
                                ))
                            }
                        </>
                    )
                    :
                    (
                        <>
                            {
                                nameSearch ?
                                    (
                                        <>
                                            <div className='NameIdBtnsCont'>
                                                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={prevPageName} disabled={page === 1}>Prev page name</button>
                                                <h3 className='NIPage'><b>{page}</b></h3>
                                                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={nextPageName} disabled={page === nameFilter.info?.pages}>Next page name</button><br />
                                            </div>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <div className='NameIdBtnsCont'>
                                                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={prevPage} disabled={page === 1}>Prev page</button>
                                                <h3 className='NIPage'><b>{page}</b></h3>
                                                <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={nextPage} disabled={page === characters.info?.page}>Next page</button><br />
                                            </div> <br />
                                                <input className={darkMode ? 'darkNameIdInp' : 'nameIdInp'} type="text" value={idSearch} onChange={e => setIdSearch(e.target.value)} placeholder="Page Number" /> <br />
                                        </>
                                    )
                                }

                            <input className={darkMode ? 'darkNameIdInp' : 'nameIdInp'} type="text" value={nameSearch} onChange={e => setNameSearch(e.target.value)} placeholder="Character´s name" /> <br />
                            <h3>Total Pages: <b>{nameSearch ? nameFilter.info?.pages : characters.info?.pages}</b></h3> <br />

                            {

                            }
                        </>
                    )

            }


            {
                nameSearch ?
                    (
                        <>
                            <div className='filtersListContainer'>
                                {
                                    nameFilter.results?.map(character => (
                                        <Link className='nICharacterList' to={`/character/${character.id}`}
                                            key={character.id}>
                                            <h4 className={darkMode ? 'darkNICharacterName' : 'nICharacterName'}>{character.name}</h4>
                                            <img className='filtersImgs' src={character.image} alt="" />
                                            <StatusCharacters darkMode={darkMode} character={character} />
                                        </Link>
                                    ))
                                }
                            </div>

                        </>
                    )
                    :
                    (
                        <>
                            <div className='filtersListContainer'>
                                {
                                    characters.results?.map(character => (
                                        <Link className='nICharacterList' to={`/character/${character.id}`}
                                            key={character.id}>
                                            <h4 className={darkMode ? 'darkNICharacterName' : 'nICharacterName'}>{character.name}</h4>
                                            <img className='filtersImgs' src={character.image} alt="" />
                                            <StatusCharacters darkMode={darkMode} character={character} />
                                        </Link>
                                    ))
                                }
                            </div>
                        </>
                    )
            }
            { }
        </div>
    );
};

export default NameIdFilter;
