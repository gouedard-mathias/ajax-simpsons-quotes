import React from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

const initialQuoteCard = {
    quote:"In theory, Communism works! In theory.",
    character:"Homer Simpson",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
};

class App extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            quoteCard: initialQuoteCard
        };
        this.getQuote = this.getQuote.bind(this);
    }

    getQuote() {
        // Send the request
        axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
            // Extract the DATA from the received response
            .then(response => response.data)
            // Use this data to update the state
            .then(data => {
                this.setState({
                    quoteCard: data[0],
                });
                console.log(data);
            });
    }

    render() {
        return (
            <div className="App">
                <Navbar/>
                <QuoteCard key={this.state.quoteCard.quote} quote={this.state.quoteCard.quote} image={this.state.quoteCard.image} character={this.state.quoteCard.character} />
                <button type="button" onClick={this.getQuote}>Get Quote</button>
                <QuoteForm/>
                <QuoteList/>
            </div>
        );
    }
}

export default App;
