import React, {Component} from 'react';
import Block from './Block';

const BlockList = ({blocks, removeBlock})=> {
    const blockElements = blocks.map(block=> <Block removeBlock={removeBlock} key={block.id} block={block}/> );
    return (
        <div className="blocklist">
        {blockElements}
        </div>
    )
}

export default BlockList;