const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: false
    },
    nytid: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Note"
        }
    ]
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;