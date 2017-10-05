import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theRandomNumber: (Math.floor(Math.random * 100)+1),
            currGuess: null,
            guesses: []
        }
    }

    handleGuess(guess) {
        this.setState(
            {currGuess: guess}
        )
        this.setState(
            {guesses: [...this.state.guesses, guess]}
        )
    }

    handleNewGame() {
        this.setState( {
            currGuess: null,
            guesses: [],
            theRandomNumber: Math.floor(Math.random * 100)+1
            }
        )
    }

    render() {
        return (
            <div>
                <Header newGame={() => this.handleNewGame()} />
                <GuessSection feedback="Make your guess!" onNewGuess={ guess => this.handleGuess(guess)} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}



/*
state:
    currGuess: after click, pass back to here,
    guesses: [#, #, #],

    note: use guesses.length for current guess counter




empty box

typing

    onChange - callback in props is called passing value back to state



user clicks guess

    guess-form = guess-section = game.js

    props.callback    *              
                    props.callback   *





*/