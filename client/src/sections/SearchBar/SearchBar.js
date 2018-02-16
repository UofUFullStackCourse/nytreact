import React, {Component} from "react";
import "./SearchBar.css";
import API from "../../utils/API";
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

    searchNYT = query => {
        API.searchNYT(query)
            .then(res => {
                console.log(res.data);
                let articles = [];
                for (let i=0; i < 5; i++) {
                   let art = {
                       title: res.data.response.docs[i].headline.main,
                       url: res.data.response.docs[i].web_url
                    };

                   articles.push(art);
                }
                this.props.callbackFromParent(articles);
            })
            .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.searchTerm) {
            console.log(".... do search for: " + this.state.searchTerm);
            this.searchNYT(this.state.searchTerm);
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
