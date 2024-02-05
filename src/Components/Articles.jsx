import {useState, useEffect} from "react";
import { getAllArticles } from "../Utils/api";
import ArticleCard from "./ArticleCard";

export default function Articles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    getAllArticles()
    .then((articles) => {
        setArticles(articles)
        setIsLoading(false)
    })
}, [])

    return (
        isLoading ? (<p>Fetching articles...</p>) :
        (<section className="article-container">
        {articles.map((article) => {
            return <ArticleCard title={article.title} imageUrl={article.article_img_url} author={article.author}/>
        })}
        </section>)
    )
}