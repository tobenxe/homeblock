import React, { Component }  from 'react';
import Toolbar from './components/Toolbar';
import BlockList from './components/BlockList';

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <main className="container">
            <Toolbar/>
            <BlockList/>
            </main>
        )
    }

}

