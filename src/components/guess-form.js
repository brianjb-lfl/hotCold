import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    
    return (
        <form onSubmit={e => {
                e.preventDefault();
                props.onSubmitGuess();
                
             }            
        }>
            <input type="text" name="userGuess" id="userGuess" 
                //ref={input => this.textInput = input}
                //value={props.value}
                onChange={e => props.onChange(e.target.value)}
                className="text" 
                maxLength="3"
                autoComplete="off"
                placeholder="Enter your Guess" required
                />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

