import React, { useState, useEffect } from 'react';
import './Window.css';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const symbols = ['+', '-', '*', '/', '\\', '!', '@', '#', '$', '%', '^', '&', '*', '(', '\'', ')', '[', ']', '{', '}', '|', '<', '>', '?'];

const Window = () => {

    const [numUppercase, setNumUppercase] = useState(0);
    const [numLowercase, setNumLowercase] = useState(0);
    const [numDigits, setNumDigits] = useState(0);
    const [numSymbols, setNumSymbols] = useState(0);
    const [phrase, setPhrase] = useState('');
    const [rawList, setRawList] = useState([]);
    const [password, setPassword] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            generatePassword();
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [numUppercase, numLowercase, numDigits, numSymbols, phrase]);

    const generatePassword = () => {

        const raw = [];

        for (let i = 0; i < numUppercase; i++) {
            let random = Math.floor(Math.random() * letters.length);
            raw.push(letters[random]);
        }

        for (let i = 0; i < numLowercase; i++) {
            let random = Math.floor(Math.random() * letters.length);
            raw.push(letters[random].toLowerCase());
        }

        for (let i = 0; i < numDigits; i++) {
            let random = Math.floor(Math.random() * numbers.length);
            raw.push(numbers[random]);
        }

        for (let i = 0; i < numSymbols; i++) {
            let random = Math.floor(Math.random() * symbols.length);
            raw.push(symbols[random]);
        }

        raw.push(phrase);

        setRawList(raw);

        for (let i = raw.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = raw[i];
            raw[i] = raw[j];
            raw[j] = temp;
        }

        let finished = '';

        for (let i = 0; i < raw.length; i++) {
            finished = finished + raw[i];
        }
        //console.log(raw);
        setPassword(finished);
        //console.log(`${numUppercase} ${numLowercase} ${numDigits} ${numSymbols} ${phrase}`);
    }

    const updateState = (newValue, set) => {
        set(newValue);
    }

    const rearrange = () => {
        const tempList = [...rawList]

        for (let i = tempList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = tempList[i];
            tempList[i] = tempList[j];
            tempList[j] = temp;
        }

        setRawList(tempList);

        let finished = '';

        for (let i = 0; i < tempList.length; i++) {
            finished = finished + tempList[i];
        }
        setPassword(finished);

    }

    return (
        <div className="window">
            <h2 className='window-header'>
                Password Generator
            </h2>
            <div className='generate-result'>
                {password}
            </div>
            <button className='rearrange' onClick={rearrange}>Rearrange password</button>
            <div className='option'>
                <label className='option-label'># of uppercase letters</label>
                <input
                    className='option-input-number'
                    type='number' min={0}
                    defaultValue={0}
                    onChange={(e) => updateState(e.target.value, setNumUppercase)}
                />
            </div>
            <div className='option'>
                <label className='option-label'># of lowercase letters</label>
                <input
                    className='option-input-number'
                    type='number'
                    min={0}
                    defaultValue={0}
                    onChange={(e) => updateState(e.target.value, setNumLowercase)}
                />
            </div>
            <div className='option'>
                <label className='option-label'># of digits</label>
                <input
                    className='option-input-number'
                    type='number'
                    min={0}
                    defaultValue={0}
                    onChange={(e) => updateState(e.target.value, setNumDigits)}
                />
            </div>
            <div className='option'>
                <label className='option-label'># of symbols</label>
                <input
                    className='option-input-number'
                    type='number'
                    min={0}
                    defaultValue={0}
                    onChange={(e) => updateState(e.target.value, setNumSymbols)}
                />
            </div>
            <div className='option'>
                <label className='option-label'>Include phrase?</label>
                <input
                    className='option-input-text'
                    type='text'
                    defaultValue=''
                    onChange={(e) => updateState(e.target.value, setPhrase)}
                />
            </div>
        </div>
    );
};

export default Window;