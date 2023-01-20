import React from 'react';

const StatusCharacterInfo = ({ darkMode, characterInfo }) => {

    const status = characterInfo.status

    if (status === "Dead") {
        return (
            <>
                <h3 className={darkMode? 'darkCharacterStatus3' : 'characterStatus3'}>
                    <b> <div className='dead status'></div></b>
                    <p className={darkMode? 'darkStatFont3' : 'statFont3'}>{characterInfo.status}</p>
                </h3>
            </>
        )

    } else if (status === "Alive") {
        return (
            <>
                <h3 className={darkMode? 'darkCharacterStatus3' : 'characterStatus3'}>
                    <b> <div className='alive status'></div></b>
                    <p className={darkMode? 'darkStatFont3' : 'statFont3'}>{characterInfo.status}</p>
                </h3>
            </>
        )
    } else if (status === "unknown") {
        return (
            <>
                <h3 className={darkMode? 'darkCharacterStatus3' : 'characterStatus3'}>
                    <b> <div className='unknown status'></div></b>
                    <p className={darkMode? 'darkStatFont3' : 'statFont3'}>{characterInfo.status}</p>
                </h3>
            </>
        )
    }

};
export default StatusCharacterInfo; 