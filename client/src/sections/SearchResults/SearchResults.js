import React, {Component} from "react";
import "./SearchResults.css";
import {Col, Row, Container} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

class SearchResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            text: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({articles: nextProps.searchResults});
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
                           button goes here
                        </Col>
                    </Row>
                ))}
        </Container>);
    }
}

export default SearchResults;
