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

export function getCommentsForArticle(article_id) {
    return newsApi.get(`/articles/${article_id}/comments`)
    .then((apiResponse) => {
        const { data: { comments } } = apiResponse;
        return comments;
    })
}

export function patchVotes(article_id, votes) {
    return newsApi.patch(`/articles/${article_id}`, {
         inc_votes: votes
    })
    .then((apiResponse) => {
        return apiResponse
    })
}



