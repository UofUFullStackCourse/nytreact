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
            <div className="sbox">
                <input
                    value={this.state.searchTerm}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(searchTerm) {
        this.setState({searchTerm});
        this.props.onSearchTermChange(searchTerm);
    }
}

export default Search;
