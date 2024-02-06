import { useState, useEffect } from "react";
import { getAllArticles } from "../Utils/api";
import ArticleCard from "./ArticleCard";
import ArticleDetail from "./ArticleDetail";
import ErrorPage from "./ErrorPage";

export default function Articles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [selectedArticleId, setSelectedArticleId] = useState(null)
    const [error, setError] = useState(null)

useEffect(() => {
    getAllArticles()
    .then((articles) => {
        setArticles(articles)
        setIsLoading(false)
    })
    .catch((err) => {
        setError({err})
    })
}, [])

function handleArticleSelect(articleId) {
    setSelectedArticleId(articleId)
}

if (error) {
    return <ErrorPage message={"Sorry, we're unable to load articles at this time"}/>
} else {
    return (
        <main>
        {isLoading ? (<p>Fetching articles...</p>) :
        (<section className="articles-list">
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article_id={article.article_id} title={article.title} imageUrl={article.article_img_url} author={article.author} onSelectArticle={handleArticleSelect}/>
        })}
        </section>)}
        {selectedArticleId ? <ArticleDetail/> : null}
        </main>
    )
}
}