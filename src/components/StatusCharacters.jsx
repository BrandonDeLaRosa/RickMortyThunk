import React from 'react';

const StatusCharacters = ({ darkMode, character }) => {

    const status = character.status

    if (status === "Dead") {
        return (
            <>
                <h3 className={darkMode? 'darkCharacterStatus2' : 'characterStatus2'}>
                    <b> <div className='dead status'></div></b>
                    <p className={darkMode? 'darkStatFont2' : 'statFont2'}>{character.status}</p>
                </h3>
            </>
        )

    } else if (status === "Alive") {
        return (
            <>
                <h3 className={darkMode? 'darkCharacterStatus2' : 'characterStatus2'}>
                    <b> <div className='alive status'></div></b>
                    <p className={darkMode? 'darkStatFont2' : 'statFont2'}>{character.status}</p>
                </h3>
            </>
        )
    } else if (status === "unknown") {
        return (
            <>
                <h3 className={darkMode? 'darkCharacterStatus2' : 'characterStatus2'}>
                    <b> <div className='unknown status'></div></b>
                    <p className={darkMode? 'darkStatFont2' : 'statFont2'}>{character.status}</p>
                </h3>
            </>
        )
    }

};
export default StatusCharacters; 