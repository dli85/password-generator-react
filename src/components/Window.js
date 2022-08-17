import React from 'react';
import './Window.css';

const Window = () => {

    return (
        <div className="window">
            <h2 className='window-header'>
                Password Generator
            </h2>
            <div className='generate-result'>

            </div>
            <button className='rearrange'>Rearrange password</button>
            <div className='option'>
                <label className='option-label'># of uppercase letters</label>
                <input className='option-input-number' type='number' min={0} defaultValue={0}></input>
            </div>
            <div className='option'>
                <label className='option-label'># of lowercase letters</label>
                <input className='option-input-number' type='number' min={0} defaultValue={0}></input>
            </div>
            <div className='option'>
                <label className='option-label'># of digits</label>
                <input className='option-input-number' type='number' min={0} defaultValue={0}></input>
            </div>
            <div className='option'>
                <label className='option-label'># of symbols</label>
                <input className='option-input-number' type='number' min={0} defaultValue={0}></input>
            </div>
            <div className='option'>
                <label className='option-label'>Include phrase?</label>
                <input className='option-input-text' type='text'></input>
            </div>
        </div>
    );
};

export default Window;