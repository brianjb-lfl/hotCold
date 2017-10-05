import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default class GuessSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guessValue: 0
        }
    }

    handleChange(text) {
        this.setState({
            guessValue: text
        })
    }

    handleGuess() {
        console.log('handling guess ', this.state.guessValue);
        this.props.onNewGuess(this.state.guessValue);
    }


    render() {
        return (
            <section>
                <h2 id="feedback">'header'</h2>
                <GuessForm 
                    onChange={text => this.handleChange(text)} 
                    onSubmitGuess={ () => this.handleGuess()}
                    value={this.state.guessValue} />
            </section>
        );
    }


}

