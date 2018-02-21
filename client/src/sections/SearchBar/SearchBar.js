import React, {Component} from "react";
import "./SearchBar.css";
import API from "../../utils/API";
import {Input, SearchButton} from "../../components/SearchForms";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            savedArticles: []
        };
    }

    componentDidMount() {
        this.loadSavedArticles();
    }

    loadSavedArticles = () => {
        //console.log("... loading saved articles =====>");
        API.getArticles()
            .then(res => {
                this.setState({savedArticles: res.data});
                this.props.callSavedArticles(res.data);
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    searchNYT = query => {
        API.searchNYT(query)
            .then(res => {
                //console.log(res.data);
                let saved = this.state.savedArticles;
                let articles = [];
                let numArticles = 5;
                for (let i = 0; i < numArticles; i++) {
                    let alreadySaved = false;
                    for (let j = 0; j < saved.length; j++) {
                        if (saved[j].nytid === res.data.response.docs[i]._id) {
                            alreadySaved = true;
                            break;
                        }
                    }
                    if (!alreadySaved) {
                        let art = {
                            title: res.data.response.docs[i].headline.main,
                            url: res.data.response.docs[i].web_url,
                            snippet: res.data.response.docs[i].snippet,
                            nytid: res.data.response.docs[i]._id
                        };

                        articles.push(art);
                    } else {
                        numArticles++;
                    }
                }
                this.props.callbackFromParent(articles);
            })
            .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.searchTerm) {
            //console.log(".... do search for: " + this.state.searchTerm);
            this.loadSavedArticles();
            this.searchNYT(this.state.searchTerm);
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
                                <SearchButton onClick={this.handleFormSubmit}>
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

export default SearchBar;
