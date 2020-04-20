
import React from 'react';

const ModalWrapper = (props)=>{
        return(
            <div onClick={(e)=> {if(e.target === e.currentTarget) props.toggleModal() } } >
                {props.children}
                <div>
                    <button onClick={()=>{
                        props.saveData();
                        props.toggleModal();
                    }}>
                    Save
                    </button>
                    <button onClick={props.toggleModal}>Close</button>
                </div>
            </div>
        )
}

export default ModalWrapper;