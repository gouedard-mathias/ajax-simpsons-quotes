import React from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 30;

class QuoteForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            character: 'Homer Simpson'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        const input = event.target;
        const newValue = input.value;
        const newValueLength = newValue.length;
        if (newValueLength <= MAX_LENGTH) {
            this.setState({character: newValue});
        }
    }

    render() {
        const maximumReached = this.state.character.length >= MAX_LENGTH;
        const numRemaining = MAX_LENGTH - this.state.character.length;
        return (
            <form
                className="QuoteForm"
                onSubmit={this.handleSubmit}
            >
                <label htmlFor="character">Character:</label>
                <input
                    className={maximumReached ? 'length-maximum-reached' : 'length-ok'}
                    id="character"
                    name="character"
                    value={this.state.character}
                    type="text"
                    onChange={this.handleChange}
                />
                <small className="remaining-characters">
                    {numRemaining} remaining characters
                </small>
                <p>
                    You typed: <strong>{this.state.character}</strong>
                </p>
            </form>
        );
    }
}

export default QuoteForm;
