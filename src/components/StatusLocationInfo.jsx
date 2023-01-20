import React from 'react';

const StatusLocationInfo = ({ resident,darkMode }) => {

    const status = resident.status

    if (status === "Dead") {
        return (
            <>
                <h3 className={darkMode? 'darkCharacterStatus' : 'characterStatus'}>
                    <b> <div className='dead status'></div></b>
                    <h6 className={darkMode? 'darkStatFont' : 'statFont'}>{resident.status}</h6>
                </h3>
            </>
        )

    } else if (status === "Alive") {
        return (
            <>
                <h3 className={darkMode? 'darkCharacterStatus' : 'characterStatus'}>
                    <b> <div className='alive status'></div></b>
                    <h6 className={darkMode? 'darkStatFont' : 'statFont'}>{resident.status}</h6>
                </h3>
            </>
        )
    } else if (status === "unknown") {
        return (
            <>
                <h3 className={darkMode? 'darkCharacterStatus' : 'characterStatus'}>
                    <b> <div className='unknown status'></div></b>
                    <h6 className={darkMode? 'darkStatFont' : 'statFont'}>{resident.status}</h6>
                </h3>
            </>
        )
    }

};
export default StatusLocationInfo; 