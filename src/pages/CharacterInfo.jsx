import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import StatusCharacterInfo from '../components/StatusCharacterInfo';
import { getCharacterInfo } from '../store/slices/characterInfo.slice';

const CharacterInfo = ({darkMode}) => {

    const characterInfo = useSelector(state => state.characterInfo)
    const name = useSelector(state => state.name)
    const loader = useSelector(state => state.loader)
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
            {loader && <Loading />}
            <h2><b style={{color: "orange"}}>{name ? name : "Please log in!"}´s</b> {name ? "session." : ""} </h2> <br />
            <div className='ipadSize'>
                <div className='characterInfoData'>
                    <h3 className='cIText'> <b className={darkMode ? 'darkCIData' : 'cIdata'}>Name: </b> {characterInfo?.name}</h3>
                    <h3 className='cIText'> <b className={darkMode ? 'darkCIData' : 'cIdata'}>Origin in space: </b> {characterInfo?.origin?.name ? characterInfo?.origin?.name : "Unknown"}</h3>
                    <h3 className='cIText'> <b className={darkMode ? 'darkCIData' : 'cIdata'}>Actual location: </b> {characterInfo?.location?.name}</h3>
                    <h3 className='cIText'> <b className={darkMode ? 'darkCIData' : 'cIdata'}>Status: </b> {characterInfo?.status}</h3>
                    <h3 className='cIText'> <b className={darkMode ? 'darkCIData' : 'cIdata'}>Species: </b> {characterInfo?.species}</h3>
                    <h3 className='cIText'> <b className={darkMode ? 'darkCIData' : 'cIdata'}>Type: </b> {characterInfo?.type ? characterInfo?.type : "Unknown"}</h3>
                    <h3 className='cIText'> <b className={darkMode ? 'darkCIData' : 'cIdata'}>Gender: </b> {characterInfo?.gender}</h3>
                    <h3 className='cIText'> <b className={darkMode ? 'darkCIData' : 'cIdata'}>No. of episodes </b> {characterInfo?.episode?.length}</h3>
                </div> <br />
                
                <div>
                    <img className='characterInfoImg' src={characterInfo.image} alt="CharacterImage" /> <br />
                    <StatusCharacterInfo characterInfo={characterInfo} darkMode={darkMode} />
                </div>

                <div className='characInfoBtnsCont'>
                    <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={prevCha} disabled={Number(id) === 1}>Prev</button>
                    <h3 className='NIPage'><b>{id}</b></h3>
                    <button className={darkMode ? 'darkNINameSearchBtn' : 'nINameSearchBtn'} onClick={NextCha} disabled={Number(id) === 826}>Next</button>
                </div>
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