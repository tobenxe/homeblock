import React from 'react';

const Toolbar = ({toggleSettings})=>{
    return (
        <div  className= "toolbar">
            <span onClick={toggleSettings} role="img"  aria-label="Settings Icon">⚙</span>
        </div>
    )
}

export default Toolbar;