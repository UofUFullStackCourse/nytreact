import React, {Component} from 'react';
import './App.css';

import SearchBar from './sections/SearchBar';
import SearchResults from './sections/SearchResults';
import Jumbotron from './components/Jumbotron';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchedArticles: []
        }
    }

    getResults = (results) => {
        //console.log("... in myCallback with: " + results);
        this.setState({searchedArticles: results})
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <p>NYT Article Search and Save</p>
                </Jumbotron>
                <SearchBar callbackFromParent={this.getResults}/>
                <SearchResults searchResults={this.state.searchedArticles}/>
            </div>
        );
    }
}

export default App;
