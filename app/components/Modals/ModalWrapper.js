
import React from 'react';

const ModalWrapper = ({toggleModal, saveData})=>{
        return(
            <div onClick={()=> {if(e.target === e.currentTarget) toggleModal() } } >
                {props.children}
                <div>
                    <button onClick={()=>{
                        saveData();
                        toggleModal();
                    }}>
                    Save
                    </button>
                    <button onClick={toggleModal}>Close</button>
                </div>
            </div>
        )
}

export default ModalWrapper;