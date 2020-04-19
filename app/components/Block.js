import React from 'react';
import ClockBlock from './Blocks/ClockBlock';
import WeatherBlock from './Blocks/WeatherBlock';
import TodoBlock from './Blocks/TodoBlock';

const Block = ({block}) =>{
    let CurrentBlock;
    switch(block.id){
        case 1:
            CurrentBlock = <ClockBlock/>;
            break;
        case 2:
            CurrentBlock = <WeatherBlock/>;
            break;
        case 3:
            CurrentBlock = <TodoBlock/>;
            break;
    }

    return(
            <div className= "block">
            <CurrentBlock/> 
            </div>
    )
}
export default Block;