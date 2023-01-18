import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({darkMode, setDarkMode}) => {

    const [isVisible, setIsVisible] = useState(false)

    const showNavBar = () => {
        setIsVisible(!isVisible)
    }
    
    const randomLoc = Math.floor(Math.random() * 126) +1
    const randomCtr = Math.floor (Math.random() * 826) +1

    return (
        <div className='menuContainer'>
            {/* Side menu */}
            {
                isVisible ?
                    (
                        <>
                            <nav className={isVisible ? "linksMenu" : "links"}>

                                <div className='extraBtns'>
                                    <button className='nav-btn close-btn' onClick={showNavBar}>
                                        <i style={{ color: "white" }} class="fa-regular fa-circle-xmark"></i>
                                    </button>
                                    {
                                        darkMode ? (
                                            <>
                                                <button className='dkBtn' onClick={() => {setDarkMode(!darkMode), setIsVisible(false)}}>
                                                    <i style={{color: "#dcc215"}} class="fa-regular fa-sun"></i>
                                                </button>
                                            </>
                                        ) :
                                            (
                                                <>
                                                    <button className='dkBtn' onClick={() => {setDarkMode(!darkMode), setIsVisible(false)}}>
                                                        <i style={{color: "#c96dfd"}} class="fa-regular fa-moon"></i></button>
                                                </>
                                            )
                                    }
                                </div>

                                <Link onClick={() => setIsVisible(false)} className='link' style={{color: "white"}} to="/">Home</Link>
                                <Link onClick={() => setIsVisible(false)} className='link' style={{color: "white"}} to="/locations">Locations</Link>
                                <Link onClick={() => setIsVisible(false)} className='link' style={{color: "white"}} to={`/location/${randomLoc}`}>Location Info</Link>
                                <Link onClick={() => setIsVisible(false)} className='link' style={{color: "white"}} to="/characters">Characters</Link>
                                <Link onClick={() => setIsVisible(false)} className='link' style={{color: "white"}} to={`/character/${randomCtr}`}>Characters Info</Link>


                            </nav>
                        </>
                    )
                    :
                    // Menu post 1024px
                    (
                        <>
                            <nav className={isVisible ? "linksMenu" : "links"}>
                                <Link className={darkMode? "darkLink" : "link"} to="/">Home</Link>
                                <Link className={darkMode? "darkLink" : "link"} to="/locations">Locations</Link>
                                <Link className={darkMode? "darkLink" : "link"} to={`/location/${randomLoc}`}>Location Info</Link>
                                <Link className={darkMode? "darkLink" : "link"} to="/characters">Characters</Link>
                                <Link className={darkMode? "darkLink" : "link"} to={`/character/${randomCtr}`}>Characters Info</Link>

                                {
                                    darkMode ? (
                                        <>
                                            <button className='dkBtn' onClick={() => setDarkMode(!darkMode)}>
                                                <i style={{color: "#dcc215"}} class="fa-regular fa-sun"></i>
                                            </button>
                                        </>
                                    ) :
                                        (
                                            <>
                                                <button className='dkBtn' onClick={() => setDarkMode(!darkMode)}>
                                                    <i style={{color: "#c96dfd"}} class="fa-regular fa-moon"></i></button>
                                            </>
                                        )
                                }
                            </nav>
                            <button className='nav-btn' onClick={showNavBar}>
                                <i style={{ color: darkMode ? "white" : "black" }} class="fa-solid fa-bars"></i>
                            </button>
                        </>
                    )
            }
        </div>
    );
};

export default Header;
