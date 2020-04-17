import React, { Component }  from 'react';
import Toolbar from './components/Toolbar';
import SettingsModal from './components/Settings/SettingsModal';
import BlockList from './components/BlockList';
import './style.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            settingsShown: false,
            settings: {},
        }
    }
    //Handles the opening and closing of the settings modal
    toggleSettings = ()=>  this.setState({settingsShown: this.state.settingsShown ? false:true });
    render(){
        return (
            <main className="container">
                { this.state.settingsShown && <SettingsModal /> } 
                <Toolbar toggleSettings={this.toggleSettings} />
                <BlockList/>
            </main>
        )
    }

}