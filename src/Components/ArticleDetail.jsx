import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle } from "../Utils/api"
import ErrorPage from "./ErrorPage";

export default function ArticleDetail() {

    const [isLoading, setIsLoading] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [error, setError] = useState(null)

    const { article_id } = useParams()

    useEffect(() => {
        getIndividualArticle(article_id)
        .then((article) => {
            setSelectedArticle(article)
            setIsLoading(false)
        })
        .catch((err) => {
            setError({ err })
        })
    }, [article_id])

    if (error) {
        return <ErrorPage message={"Sorry, we've experienced an issue loading this article"}/>
    } else {
        return (
            <main>
        {isLoading ? (<p>Fetching article...</p>) :
        (<article className="article-container">
        <h2>{selectedArticle.title}</h2>
        <h3>By {selectedArticle.author} 👤</h3>
        <img className="article-image" src={selectedArticle.article_img_url} alt={`image for article titled ${selectedArticle.title}`}/>
        <p className="article-text">{selectedArticle.body}</p>
        <button>⬆️{selectedArticle.votes}</button>
        </article>)}
        </main>
    )
}
}