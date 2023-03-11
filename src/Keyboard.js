import React from 'react';
import backspace from './assets/backspace.png';

function Keyboard() {

    return (
        <div className="keyboard">
            <div className="row">
                <button className="key" >Q</button>
                <button className="key" >W</button>
                <button className="key" >E</button>
                <button className="key" >R</button>
                <button className="key" >T</button>
                <button className="key" >Y</button>
                <button className="key" >U</button>
                <button className="key" >I</button>
                <button className="key" >O</button>
                <button className="key" >P</button>
            </div>
            <div className="row">
                <button className="key" >A</button>
                <button className="key" >S</button>
                <button className="key" >D</button>
                <button className="key" >F</button>
                <button className="key" >G</button>
                <button className="key" >H</button>
                <button className="key" >J</button>
                <button className="key" >K</button>
                <button className="key" >L</button>
            </div>
            <div className="row" >
                <button className="bigkey" >ENTER</button>
                <button className="key" >S</button>
                <button className="key" >D</button>
                <button className="key" >F</button>
                <button className="key" >G</button>
                <button className="key" >H</button>
                <button className="key" >J</button>
                <button className="key" >K</button>
                <button className="bigkey" >
                    <img alt="backspace icon" src={backspace} />
                </button>
            </div>
        </div>
    )

}

export default Keyboard;