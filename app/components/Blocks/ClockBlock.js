import React from 'react';
//Clock component
const ClockBlock = ()=>{
    const timeNow = Date.now();
    return (
        <div className= "block__clock">
            <h1>{setInterval(()=>{  new Date().toLocaleTimeString()}, 1000)}</h1>
            <span>{ Intl.DateTimeFormat().resolvedOptions().timeZone  }</span>
            <span>{ timeNow.getDate() + timeNow.getMonth() + timeNow.getYear() }</span>
        </div>
    )
}

export default ClockBlock;
