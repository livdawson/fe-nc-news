import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://northcoders-news-board.onrender.com/api'
})

export function getArticles(selectedTopic) {
    let url = "/articles"
    if (selectedTopic) {
        url += `?topic=${selectedTopic}`
    }
    return newsApi.get(url)
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

export function getUsers() {
    return newsApi.get('/users')
    .then((apiResponse) => {
        const { data: { users } } = apiResponse;
        return users;
    })
}

export function postComment(article_id, username, body) {
    return newsApi.post(`/articles/${article_id}/comments`, {
        username: username,
        body: body
    })
    .then((apiResponse) => {
        return apiResponse
    })
}

export function deleteComment(comment_id) {
    return newsApi.delete(`/comments/${comment_id}`)
    .then((apiResponse) => {
        return apiResponse
    })
}

export function getTopics() {
    return newsApi.get('/topics')
    .then((apiResponse) => {
        const { data: { topics } } = apiResponse;
        return topics;
    })
}


