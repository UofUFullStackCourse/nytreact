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
            articles: []
        };
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <p>Saved Articles</p>
                </Jumbotron>
            </div>
        )
    }
}


export default SavedArticles;
