import React, {Component} from "react";
import "./SearchResults.css";
import {Col, Row, Container} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import {SaveButton} from "./SaveButton";
import API from "../../utils/API";

class SearchResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({articles: nextProps.searchResults});
    }

    loadSavedArticles = () => {
        //console.log("... loading saved articles =====>");
        API.getArticles()
            .then(res => {
                this.props.callSavedArticles(res.data);
            })
            .catch(err => console.log(err));
    };


    saveArticle(article) {
        //console.log("... clicked saving article:");
        //console.log(article);
        let arts = this.state.articles;
        let index = arts.indexOf(article);
        if (index > -1) {
            arts.splice(index, 1);
        }
        API.saveArticle(article)
            .then(res => {
                this.setState({articles: arts});
                this.loadSavedArticles();
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
            <Jumbotron>
                <p>Search Results</p>
            </Jumbotron>
            {
                this.state.articles.map((article, index) => (
                    <Row key={index}>
                        <Col fluid size="md-8">
                            <a data-id={article.nytid} href={article.url} target="_blank">{article.title}</a>
                            <p>{article.snippet}</p>
                        </Col>
                        <Col size="md-4">
                            <SaveButton onClick={() => this.saveArticle(article) }>
                                Save
                            </SaveButton>
                        </Col>
                    </Row>
                ))}
        </Container>
        );
    }
}

export default SearchResults;
