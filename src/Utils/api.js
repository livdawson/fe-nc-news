import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://northcoders-news-board.onrender.com/api'
})

export function getAllArticles() {
    return newsApi.get("/articles")
    .then((apiResponse) => {
        const { data: { articles } } = apiResponse
        return articles
    })
}

export function getIndividualArticle(article_id) {
    return newsApi.get(`/articles/${article_id}`)
    .then((apiResponse) => {
        const { data: { article } } = apiResponse;
        return article;
    })
}


