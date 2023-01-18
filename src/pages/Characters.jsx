import SpeciesFilter from '../Components/SpeciesFilter';
import NameIdFilter from '../Components/NameIdFilter';
import { useState } from 'react';
import StatusFilter from '../Components/StatusFilter';
import GenderFilter from '../Components/GenderFilter';
import { useSelector } from 'react-redux';

const Characters = ({darkMode}) => {
    const [filterType, setFilterType] = useState("name/id");
    const name = useSelector(state => state.name);

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
   
   
    return (
        <div className='characterContainer'>  
            <div className='characterTitle'>
            <h1>Characters Page</h1>
            <h2><b style={{color: "orange"}}>{name ? name : "Please log in!"}´s</b> {name? "session." : ""} </h2> <br />
            </div>

            <div className='characterBtns'>
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

                {/* <NameIdFilter darkMode={darkMode}/> */}
                {/* <StatusFilter darkMode={darkMode}/> */}
                {/* <SpeciesFilter darkMode={darkMode}/> */}
                {/* <GenderFilter darkMode={darkMode}/>  */}
            </div>


        </div>
    );
};

export default Characters;