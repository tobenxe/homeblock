import React, { Component } from 'react';
import ModalWrapper from './ModalWrapper'

class AddModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            shownBlocks: []
        }
    }
    saveData = () => {
        let data =  this.props.blocks.filter(block=> this.state.shownBlocks.includes(block.id));
        this.props.saveHandler(data, 'blocks');
    }
    handleCheck = target => {
        if(!target.checked) return this.setState({shownBlocks: this.state.shownBlocks.filter(blockId=>blockId!==target.id) });
        this.setState({shownBlocks: this.state.shownBlocks.push(target.id) });
    }

    render(){
        return(
            <ModalWrapper saveData={this.saveData} toggleModal={this.props.toggleModal} >
             //iterate over blocks
             {
                this.props.blocks.map(item=>{
                return (
                    <div className="modal__list-item"> 
                    <label for={item.id}>☰ {item.name}</label>
                    <input id={item.id} type="checkbox" value={item.id} className="modal__checkbox" onClick={(e)=>this.handleCheck(e.target)}  />
                    </div>
                )
        
                })
             }
            </ModalWrapper>
        )
    }


}

export default AddModal;