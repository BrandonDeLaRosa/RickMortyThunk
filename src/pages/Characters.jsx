import SpeciesFilter from '../components/SpeciesFilter';
import NameIdFilter from '../components/NameIdFilter';
import { useState } from 'react';
import StatusFilter from '../components/StatusFilter';
import GenderFilter from '../components/GenderFilter';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { Link } from 'react-scroll';

// const Characters = ({darkMode,nameSearch,idSearch}) => {
const Characters = ({darkMode,nameSearch,idSearch}) => {
    // const [filterType, setFilterType] = useState("name/id");
    const name = useSelector(state => state.name);
    const loader = useSelector(state => state.loader);
    const [color,setColor] = useState(false)
    const colorChange = () => {
        if(window.scrollY >= 10) {
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', colorChange)

    

    return (
        // <div className={color? 'characterContainer-bg' : 'characterContainer'}>
        <div className= 'characterContainer'> 
            <div className='charactersTitle'>

                {loader && <Loading />}

                <h1 className='charactersTitle1'>Characters Page</h1>
                <h2 className='charactersTitle2'><b style={{ color: "orange" }}>{name ? name : "Please log in!"}´s</b> {name ? "session." : ""} </h2>
            </div>
{/*             
            {
                idSearch || nameSearch?
                    (
                        <><NameIdFilter darkMode={darkMode} /></>
                    )
                    :
                    (
                        <>
                            <div className={darkMode ? (color ? 'darkCharacterBtns2-bg' : 'characterBtns2') : (color ? 'characterBtns2-bg' : 'characterBtns2')}>
                                <Link className={darkMode ? 'darkCharacterBtn' : 'characterBtn'} to="nameId" smooth={true} duration={1000}>Name / Id </Link>
                                <Link className={darkMode ? 'darkCharacterBtn' : 'characterBtn'} to="species" smooth={true} duration={1000}>Species</Link>
                                <Link className={darkMode ? 'darkCharacterBtn' : 'characterBtn'} to="status" smooth={true} duration={1000}>Status</Link>
                                <Link className={darkMode ? 'darkCharacterBtn' : 'characterBtn'} to="gender" smooth={true} duration={1000}>Gender</Link>
                            </div>

                            <div className='characterFilter2'>
                                <NameIdFilter darkMode={darkMode} /> <br />
                                <StatusFilter darkMode={darkMode} /> <br />
                                <SpeciesFilter darkMode={darkMode} /> <br />
                                <GenderFilter darkMode={darkMode} /> <br />
                            </div>
                        </>
                    )
            } */}
            
                
            {/* <div className={darkMode? (color? 'darkCharacterBtns2-bg' : 'characterBtns2') : (color? 'characterBtns2-bg' : 'characterBtns2')}> */}
            <div className={darkMode? (color? 'darkCharacterBtns2-bg' : 'characterBtns2') : (color? 'characterBtns2-bg' : 'characterBtns2')}>
                <Link className={darkMode ? 'darkCharacterBtn' : 'characterBtn'} to="nameId" smooth={true} duration={1000}>Name / Id </Link>
                <Link className={darkMode ? 'darkCharacterBtn' : 'characterBtn'} to="species" smooth={true} duration={1000}>Species</Link>
                <Link className={darkMode ? 'darkCharacterBtn' : 'characterBtn'} to="status" smooth={true} duration={1000}>Status</Link>
                <Link className={darkMode ? 'darkCharacterBtn' : 'characterBtn'} to="gender" smooth={true} duration={1000}>Gender</Link>
            </div>

            <div className='characterFilter2'>
                <NameIdFilter darkMode={darkMode} /> <br />
                <StatusFilter darkMode={darkMode} /> <br />
                <SpeciesFilter darkMode={darkMode} /> <br />
                <GenderFilter darkMode={darkMode} /> <br />
            </div>

        </div>
    );
};

export default Characters;

// npm i react-router-hash-link
// npm install react-scroll

{/* <div className='characterBtns'>
            <button className={darkMode? 'darkCharacterBtn' : 'characterBtn'} onClick={() => setFilterType("name/id")}>Name / Id </button>
            <button className={darkMode? 'darkCharacterBtn' : 'characterBtn'} onClick={() => setFilterType("species")}>Species</button>
            <button className={darkMode? 'darkCharacterBtn' : 'characterBtn'} onClick={() => setFilterType("status")}>Status</button>
            <button className={darkMode? 'darkCharacterBtn' : 'characterBtn'} onClick={() => setFilterType("gender")}>Gender</button>
            </div>


            <div className='characterFilter'>
                {
                    filterType === "name/id" ? (
                        <NameIdFilter darkMode={darkMode} />
                    ) : (
                        filterType === "species" ? (
                            <SpeciesFilter darkMode={darkMode} />
                        ) : (
                            filterType === "status" ? (
                                <StatusFilter darkMode={darkMode} />
                            ) : (
                                filterType === "gender" ? (
                                    <GenderFilter darkMode={darkMode} />
                                ) : (
                                    <></>
                                )
                            )
                        )
                    )
                }
            </div> */}



    /*

             //    const filters = () => {
    //     if(filterType === "species"){
    //         <SpeciesFilter/>
    //     }else if (filterType === "name/id"){
    //         <NameIdFilter/>
    //     }else if (filterType === "status"){
    //         <StatusFilter/>
    //     }else if (filterType === "gender"){
    //         <GenderFilter/>
    //     }
    //    }
    */