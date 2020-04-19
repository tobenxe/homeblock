import React from 'react';
import AddModal from './AddModal'
import SettingsModal from './SettingsModal'

const Modal = ({modalName, toggleModal, blocks, saveHandler}) =>{
    let CurrentModal;
    switch(modalName){
        case 'addModal':
            CurrentModal = <AddModal  blocks={blocks}/>; //test
            break;
        case 'settingsModal':
            CurrentModal = <SettingsModal/>;
            break;
    }

    return  <CurrentModal saveHandler={saveHandler} toggleModal={toggleModal} />
}
export default Modal;