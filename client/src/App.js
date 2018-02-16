import React, {Component} from 'react';
import './App.css';

import SearchBar from './sections/SearchBar';
import SearchResults from './sections/SearchResults';
import Jumbotron from './components/Jumbotron';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search_articles: [],
            tempText: ''
        }
    }

    getResults = (results) => {
        console.log("... in myCallback with: " + results);
        this.setState({search_articles: results})
    };

    render() {
        return (
            <div>
            <Jumbotron children={"NYT Articles"}/>
            <SearchBar callbackFromParent={this.getResults} />
            <SearchResults searchResults={this.state.search_articles} />
            </div>
        );
    }
}

export default App;
