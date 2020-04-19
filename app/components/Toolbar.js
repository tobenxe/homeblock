import React from 'react';

const Toolbar = ({toggleModal})=>{
    return (
        <div  className= "toolbar">
            <span onClick={toggleModal} role="button"  aria-label="add block button">+</span>
            <span onClick={toggleModal} role="button"  aria-label="open settings button">⚙</span>
        </div>
    )
}

export default Toolbar;