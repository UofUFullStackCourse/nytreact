import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/Search';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        }
    }

    articleSearch(term) {
        //console.log(".... term to search...");
        //console.log(term);
    }

    render() {
        return (
            <Search onSearchTermChange={term => this.articleSearch(term)} />
        );
    }
}

export default App;
