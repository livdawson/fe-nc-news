import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle } from "../Utils/api"
import ErrorPage from "./ErrorPage";
import CommentList from "./CommentList";

export default function ArticleDetail() {

    const [isLoading, setIsLoading] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [error, setError] = useState(null);

    const { article_id } = useParams();

    useEffect(() => {
        getIndividualArticle(article_id)
        .then((article) => {
            setSelectedArticle(article)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setError({ err })
        })
    }, [article_id])

    let formattedDate = ''
    if (selectedArticle) {
        const date = new Date(selectedArticle.created_at);
        formattedDate = date.toLocaleDateString('en-GB');
    }

    if (error) {
        return <ErrorPage message={"Sorry, we've experienced an issue loading this article"}/>
    } else {
        return (
        <main className="article-page-container">
        {isLoading ? (<p>Fetching article...</p>) :
        (<section>
        <article className="article-container">
        <h2>{selectedArticle.title}</h2>
        <h3>Created by 👤{selectedArticle.author}</h3>
        <h3>{formattedDate}</h3>
        <img className="article-image" src={selectedArticle.article_img_url} alt={`image for article titled ${selectedArticle.title}`}/>
        <p className="article-text">{selectedArticle.body}</p>
        <button>⬆️ {selectedArticle.votes}</button>
        </article>
        <h3>Comments</h3>
        <CommentList/>
        </section>)}
        </main>
    )
}
}