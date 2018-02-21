import React, {Component} from 'react';
import './App.css';

import SearchBar from './sections/SearchBar';
import SearchResults from './sections/SearchResults';
import Jumbotron from './components/Jumbotron';
import SavedArticles from "./sections/SavedArticles/SavedArticles";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchedArticles: [],
            savedArticles: []
        }
    }

    getResults = (results) => {
        //console.log("... in myCallback with: " + results);
        this.setState({searchedArticles: results})
    };

    getSaved = (results) => {
        //console.log("... in myCallback with: " + results);
        this.setState({savedArticles: results})
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <p>NYT Article Search and Save</p>
                </Jumbotron>
                <SearchBar callbackFromParent={this.getResults} callSavedArticles={this.getSaved} />
                <SearchResults searchResults={this.state.searchedArticles} callSavedArticles={this.getSaved}/>
                <SavedArticles savedArticles={this.state.savedArticles}/>
            </div>
        );
    }
}

export default App;
