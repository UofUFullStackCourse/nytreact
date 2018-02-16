import React, {Component} from "react";
import "./SearchResults.css";
import {Col, Row, Container} from "../../components/Grid";

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
        return (<div><Container fluid>
            {
                this.state.articles.map((article, index) => (
                    <Row key={index}>
                        <Col size="md-6">
                            {article.title}
                        </Col>
                        <Col size="md-6">
                            {article.url}
                        </Col>
                    </Row>
                ))}
        </Container></div>);
    }
}

export default SearchResults;
