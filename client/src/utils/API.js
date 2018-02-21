import axios from "axios";

const authKey = "1017983a94134ebfbca29cab3ec293e4";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=";

export default {
    searchNYT: function (query) {
        return axios.get(BASEURL + query);
    },
    // Gets all articles
    getArticles: function () {
        return axios.get("/api/articles");
    },
    // Gets the article with the given id
    getArticle: function (id) {
        return axios.get("/api/articles/" + id);
    },
    // Deletes the article with the given id
    deleteArticle: function (id) {
        return axios.delete("/api/articles/" + id);
    },
    // Saves a book to the database
    saveArticle: function (articleData) {
        return axios.post("/api/articles", articleData);
    },
    saveArticleNote: function (articleId, articleNoteData) {
        return axios.post("/api/notes/" + articleId, articleNoteData);
    }
};
