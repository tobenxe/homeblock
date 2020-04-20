import React from 'react';
import AddModal from './AddModal'
import SettingsModal from './SettingsModal'

const Modal = (props) =>{
    switch(props.modalName){
        case 'addModal':
            return <AddModal {...props}/>
        case 'settingsModal':
            return <SettingsModal {...props}/>
        default:
            return null
    }
}
export default Modal;