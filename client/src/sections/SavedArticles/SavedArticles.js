import React, {Component} from "react";
import "./SavedArticles.css";
import {Col, Row, Container} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import {RemoveButton} from "./RemoveButton";
import API from "../../utils/API";

class SavedArticles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            savedArticles: []
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({savedArticles: nextProps.savedArticles});
    }

    removeArticle(article) {
        //console.log("... clicked remove article:");
        //console.log(article);
        API.deleteArticle(article._id)
            .then(res => {
                this.loadSavedArticles();
            })
            .catch(err => console.log(err));
    }

    loadSavedArticles = () => {
        //console.log("... loading saved articles =====>");
        API.getArticles()
            .then(res => {
                this.setState({savedArticles: res.data});
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <p>Saved Articles</p>
                </Jumbotron>
                {
                    this.state.savedArticles.map((article, index) =>
                        (
                            <div>
                                <Row key={index}>
                                    <Col fluid size="md-8">
                                        <a data-id={article.nytid} href={article.url}
                                           target="_blank">{article.title}</a>
                                        <p>{article.snippet}</p>
                                    </Col>
                                    <Col size="md-4">
                                        <RemoveButton onClick={() => this.removeArticle(article)}>
                                            Remove
                                        </RemoveButton>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col fluid size="md-12">
                                        <p>{article.notes.length} 123</p>
                                    </Col>
                                </Row>
                            </div>
                        )
                    )
                }
            </Container>
        );
    }
}


export default SavedArticles;
