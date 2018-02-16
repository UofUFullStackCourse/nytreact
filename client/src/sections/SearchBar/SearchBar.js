import React, {Component} from "react";
import "./SearchBar.css";
import { Input, SearchButton } from "../../components/SearchForms";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.searchTerm) {
            console.log(".... do search for: " + this.state.searchTerm);
            let articles = [{title:"test Title 222", url: "http://www.test.com"},{title: "Row article 2", url: "http://hello"}];
            this.props.callbackFromParent(articles);
            /*
            API.saveBook({
                title: this.state.title,
                author: this.state.author,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
                */
        }
    };

    render() {
        return (
            <div className="sbox">
                <div className="container">
                    <div className="row">
                        <form>
                        <div className="col-md-6">
                            <Input
                                value={this.state.searchTerm}
                                onChange={this.handleInputChange}
                                name="searchTerm"
                                placeholder="Search for Article"
                            />
                        </div>
                        <div className="col-md-6">
                            <SearchButton onClick={this.handleFormSubmit} >
                                Search
                            </SearchButton>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Search;
