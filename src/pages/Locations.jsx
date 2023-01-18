import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { getLocationsThunk, userIdSearchThunk, userSearchThunk} from '../store/slices/locations.slice';
import nameSlice from '../store/slices/name.slice';

const Locations = ({darkMode}) => {

    const dispatch = useDispatch()
    const locations= useSelector(state => state.locations)
    const loader = useSelector(state => state.loader)
    const name = useSelector(state => state.name)
    
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [idSearch, setIdSearch] = useState("")
    const navigate = useNavigate()
    
    //  ------------------------------------------------------------------- Locations List ----------------------------------
    
    const prevPage = () => {
        setPage(page -1)
        dispatch(getLocationsThunk(page - 1))
    }

    const nextPage = () => {
        setPage(page +1)
        dispatch(getLocationsThunk(page + 1))
    }

    const emptyInput = () => {
        setIdSearch("")
    }

    useEffect(() => {
        dispatch(getLocationsThunk())
    },[idSearch])

    useEffect(() =>{
        if(search !== ""){
            dispatch(userSearchThunk(search))
        }
    },[search])

    useEffect(() => {
       
        if (idSearch !== "") {
            if ( idSearch <= 126 && idSearch >= 1) {
                dispatch(userIdSearchThunk(idSearch))
            } else {
                alert("Unvalid number (set a number from 1 to 126)")
                setIdSearch("")
                navigate("/locations")
            }
        }
    }, [idSearch])


// console.log(locations);

    return (
        <div className='locationsContainer'>
            <div className='locTitle'>
                <h1>Locations page</h1>
                <h2>{name ? "Welcome: " : ""}<b style={{color: "orange"}}>{name ? name : "Please log in!"}.</b> </h2>
            </div>
            {/* {loader && <Loading />} */}

            <div className='locBody'>
                {idSearch ?
                    (
                        <div className='locIdSrch'>
                            <input className={darkMode? 'darkLocIdInp' : 'locIdInp'} type="text" value={idSearch} onChange={e => setIdSearch(e.target.value)} placeholder={"set a number(1-126)"} />
                            <button className={darkMode? 'darkLocBtnRtn' : 'locBtnRtn'} onClick={emptyInput}>Return</button>
                            <Link className={darkMode ? 'darkLocRslt' : 'locRslt'} to={`/location/${locations.id}`}>
                                <h3 >{locations.name}</h3>
                            </Link>
                        </div>
                    )
                    :
                    (
                        <>

                            <div className='locInputs'>
                                <input className={darkMode? 'darkLocInput' :'locInput'} type="text" value={idSearch} onChange={e => setIdSearch(e.target.value)} placeholder={"set a number(1-126)"} />
                                <input className={darkMode? 'darkLocInput' :'locInput'} type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder={"set a valid name"} />
                            </div>
                            {search ? (<></>) :
                                (
                                    <>

                                        <div className='locBtns'>
                                            <button className={darkMode? 'darkLocBtn' : 'locBtn'} onClick={prevPage} disabled={page === 1}>prev Page</button>
                                            <h3>{page}</h3>
                                            <button className={darkMode? 'darkLocBtn' : 'locBtn'} onClick={nextPage} disabled={page === 7}>prev Page</button>
                                        </div>
                                        <h3>Total Pages: <b>{locations.info?.pages}</b></h3>

                                    </>
                                )
                            }

                            <div className='listContainer'>
                                {
                                    locations.results?.map(location => (
                                        <li className='locList' key={location.id}>
                                            <Link className={darkMode ? 'darkLocListRslt' : 'locListRslt'} to={`/location/${location.id}`}>
                                                <h5><b>{location.id}</b> {location.name}.</h5>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </div>

                        </>
                    )
                }
            </div>

        </div>
    );
};

export default Locations;