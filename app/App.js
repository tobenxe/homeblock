import React, { Component }  from 'react';
import Toolbar from './components/Toolbar';
import SettingsModal from './components/SettingsModal';
import BlockList from './components/BlockList';
import './style.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }

    render(){
        return (
            <main className="container">
            <SettingsModal/>
            <Toolbar/>
            <BlockList/>
            </main>
        )
    }

}

