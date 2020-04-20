import React, { Component } from 'react';
import ModalWrapper from './ModalWrapper';

class SettingsModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            settings: {}
        }
    }
    saveData = () =>{}

    render(){
        return(
            <ModalWrapper saveData={this.saveData} toggleModal={this.props.toggleModal} >
            <h1>This is settings modal</h1>
            </ModalWrapper>
        )
    }
}

export default SettingsModal;