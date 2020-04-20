import React, { Component }  from 'react';
import Toolbar from './components/Toolbar';
import Modal from './components/Modals/Modal';
import BlockList from './components/BlockList';
import './style.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            modalShown: null,
            settings: {},
            blocks: [
                     {
                        id: 1,
                        name: 'Clock',
                        shown: false,
                    }, 
                    {
                        id:2,
                        name: 'Weather',
                        shown: false,
                    }, 
                    {
                        id:3,
                        name: 'Todo List',
                        shown: false,
                    },
                ]
         
        }
    }

    toggleModal = (modalName) => this.setState({ modalShown: modalName ? modalName:null});
    removeBlock = (blockId) => this.setState({blocks: this.state.blocks.map(block => blockId === block.id ? {...block, shown:false} : block) });
    saveHandler = (data, type) => this.setState({[type]: data});

    render(){
        return (
            <main className="container">
                { this.state.modalShown && 
                    <Modal
                    saveHandler={this.saveHandler}
                    blocks={this.state.blocks} 
                    toggleModal={this.toggleModal} 
                    modalName={this.state.modalShown}
                    /> 
                } 
                <Toolbar toggleModal={this.toggleModal} />
                <BlockList 
                    removeBlock={this.removeBlock}  
                    blocks={this.state.blocks.filter(block=>block.shown)}
                 />

            </main>
        )
    }

}