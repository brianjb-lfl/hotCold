import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currGuess: null,
            guesses: []
        }
    }

    render() {
        return (
            <div>
                <Header />
                <GuessSection feedback="Make your guess!" />
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }
}



/*
state:
    currGuess: after click, pass back to here,
    guesses: [#, #, #],

    note: use guesses.length for current guess counter


*/