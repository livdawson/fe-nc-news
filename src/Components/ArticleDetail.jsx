import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle, patchVotes } from "../Utils/api"
import Error from "./Error";
import CommentList from "./CommentList";

export default function ArticleDetail() {

    const [isLoading, setIsLoading] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [articleLoadingError, setArticleLoadingError] = useState(null);
    const [votes, setVotes] = useState(0);
    const [votePatchingError, setVotePatchingError] = useState(null)

    const { article_id } = useParams();

    useEffect(() => {
        getIndividualArticle(article_id)
        .then((article) => {
            setSelectedArticle(article)
            setVotes(article.votes)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setArticleLoadingError(err.msg)
        })
    }, [article_id])

    
    function handleUpvote() {
        setVotes((prevVotes) => prevVotes + 1)
        patchVotes(article_id, 1)
        .then(() => {
            setVotePatchingError(null)
        })
        .catch((err) => {
            setVotes((prevVotes) => prevVotes - 1)
            setVotePatchingError(err.msg)
        })
    }

    function handleDownvote() {
        setVotes((prevVotes) => prevVotes - 1)
        patchVotes(article_id, -1)
        .then(() => {
            setVotePatchingError(null)
        })
        .catch((err) => {
            setVotes((prevVotes) => prevVotes + 1)
            setVotePatchingError(err.msg)
        })
    }

    const isNegative = votes.toString().startsWith("-");

    let formattedDate = ''
    if (selectedArticle) {
        const date = new Date(selectedArticle.created_at);
        formattedDate = date.toLocaleDateString('en-GB');
    }

    if (articleLoadingError) {
        return <Error message={"Sorry, we've experienced an issue loading this article."}/>
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
        <button className="vote-button" onClick={() => handleUpvote()}>⬆️ {isNegative ? null : `${votes}`}</button>
        <button className="vote-button" onClick={() => handleDownvote()}>⬇️ {isNegative ? `${-votes}` : null}</button>
        { votePatchingError ? <p>Something went wrong, please try again.</p> : null}
        </article>
        <CommentList/>
        </section>)}
        </main>
    )
}
}
