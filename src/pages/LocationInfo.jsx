import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Residents from '../components/Residents';
import { getLocationInfoThunk, userIdSearchThunk } from '../store/slices/locationInfo.slice';

const LocationInfo = ({darkMode}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const loader = useSelector(state => state.loader)
    const  locationInfo = useSelector(state => state.locationInfo)
    const name = useSelector(state => state.name)
    const [idSearch, setIdSearch] = useState("")

    const nextLoc = () => {
        navigate(`/location/${(locationInfo.id) + 1}`)
        setIdSearch("")
    }
    const prevLoc = () => {
        navigate(`/location/${(locationInfo.id) - 1}`)
        setIdSearch("")
    }

    useEffect(() => {
        setPage(1)
        dispatch(getLocationInfoThunk(id))
    },[id])

    useEffect(() => {
        if(idSearch !== ""){
            if(idSearch <= 126 && idSearch >= 0){
                dispatch(userIdSearchThunk(idSearch))
            }else {
                alert("Unvalid number (set a number from 1 to 126)")
                navigate("/locations")
            }
        }
    },[ idSearch])

    const [page, setPage] = useState(2)
    const residentsPerPage = 10

    const lastIndex = page * residentsPerPage
    const firstIndex = lastIndex - residentsPerPage

    let charactersPaginated = locationInfo.residents?.slice(firstIndex, lastIndex)

    const totalPages = Math.ceil(locationInfo.residents?.length / residentsPerPage)

    const numbers = []
    for (let i = 1; i < totalPages; i++) {
        numbers.push(i)
    }


    return (
        <div className='locationInfoContainer'>

            {loader && <Loading />}

            <h1 className='locInfoTitle'>Location Info</h1>
            <h2><b style={{color: "orange"}}>{name ? name : "Please log in!"}´s</b> {name ? "session." : ""} </h2>
            <div className='locInfoData'>
                <h3><b className={darkMode? 'darkLIData':'lIdata'}>Name: </b>{locationInfo?.name}</h3>
                <h3><b className={darkMode? 'darkLIData':'lIdata'}>Type: </b>{locationInfo?.type}</h3>
                <h3><b className={darkMode? 'darkLIData':'lIdata'}>Dimension: </b>{locationInfo?.dimension}</h3>
                <h3><b className={darkMode? 'darkLIData':'lIdata'}>Residents: </b>{locationInfo?.residents?.length}</h3>
            </div>
            <div className='locInfoBtns'>
                <button className={darkMode? 'darkLocInfoBtn' : 'locInfoBtn'} onClick={prevLoc} disabled={Number(id) === 1}>Prev Location</button>
                <input  className={darkMode? 'darkLocInfoInp' : 'locInfoInp'} type="text" value={idSearch} onChange={e => setIdSearch(e.target.value)} placeholder={id} />
                <button className={darkMode? 'darkLocInfoBtn' : 'locInfoBtn'} onClick={nextLoc} disabled={Number(id) === 126}>Next Location</button>
            </div>


            <div className='locInfoPgsBtns'>
                <button className={darkMode? 'darkPagesBtns' : 'pagesBtns'} onClick={() => setPage(page - 1)} disabled={page === 1}>
                    prev
                </button>
                {numbers.map(number => (
                    <button
                        key={number}
                        className={darkMode? 'darkPagesBtn' : 'pagesBtn'} onClick={() => setPage(number)}>
                        {number}
                    </button>
                ))}
                <button className={darkMode? 'darkPagesBtns' : 'pagesBtns'} onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                    next
                </button>
            </div>

            <div className='locInfList'>
            {
                charactersPaginated?.map(resident => (
                    <Residents
                        key={resident}
                        url={resident}
                        darkMode={darkMode} />
                ))
            }
            </div>

        </div>
    );
};

export default LocationInfo;