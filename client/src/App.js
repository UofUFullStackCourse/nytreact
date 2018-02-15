import React, {Component} from 'react';
import './App.css';

import Search from './components/Search';
import Jumbotron from './components/Jumbotron';

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
            <div>
            <Jumbotron children={"NYT Articles"}/>
            <Search />
            </div>
        );
    }
}

export default App;
