import React, { Component }  from 'react';
import Toolbar from './components/Toolbar';
import Modal from './components/Settings/Modal';
import BlockList from './components/BlockList';
import './style.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            modalShown: false,
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
    toggleModal = (modalName) => this.setState({ modalShown: modalName});
    removeBlock = (blockId) => this.setState({blocks: this.state.blocks.map(block => blockId === block.id ? {...block, shown:false} : block) })
    render(){
        return (
            <main className="container">
                { this.state.modalShown && <Modal toggleModal={this.toggleModal} name={this.state.modalShown}/> } 
                <Toolbar toggleModal={this.toggleModal} />
                <BlockList removeBlock={this.removeBlock}  blocks={this.state.blocks.map(block=>block.shown)}/>
            </main>
        )
    }

}