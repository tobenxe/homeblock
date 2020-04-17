import React, {Component} from 'react';
import Block from './Block';

class BlockList extends Component {
    constructor(props){
        super(props);
        this.state = { 
            settingsShown: false,
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

    render(){
        return (
            <div className="blocklist">
            {this.state.blocks.map(block=>{ if (block.shown) {
               return <Block key={block.id} block={block}/>
            } })
            }
            </div>
        )
    }
    
    
}

export default BlockList;