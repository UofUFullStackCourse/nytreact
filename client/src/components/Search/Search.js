import React, {Component} from "react";
import "./Search.css";
import "../SearchButton";
import SearchButton from "../SearchButton/SearchButton";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: 'test'
        };
    }

    render() {
        return (
            <div className="sbox">
                <input value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
                <SearchButton searchTerm={this.state.searchTerm}/>
            </div>
        );
    }

}

export default Search;
