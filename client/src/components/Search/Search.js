import React, {Component} from "react";
import "./Search.css";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: 'test'
        };
    }

    render() {
        return (
            <div>
                <input
                    value = {this.state.searchTerm}
                    onChange={event => this.setState( {searchTerm: event.target.value})} />
            </div>
        );
    }
}

export default Search;
