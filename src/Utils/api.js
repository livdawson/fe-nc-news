import axios from "axios";

export function getAllArticles() {
    return axios.get("https://northcoders-news-board.onrender.com/api/articles")
    .then((apiResponse) => {
        const { data: { articles } } = apiResponse
        return articles
    })
}