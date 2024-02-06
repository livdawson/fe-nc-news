import { Link } from "react-router-dom"

export default function ArticleCard({article_id, title, imageUrl, author, onSelectArticle}) {

    function handleClick() {
        onSelectArticle(article_id)
    }

    return (
        <Link to={`/articles/${article_id}`}>
        <section className="article-card" onClick={handleClick}>
        <h3>{title}</h3>
        <img src={imageUrl} alt={`image for article titled ${title}`}/>
        <h4>Written by: {author}</h4>
        </section>
        </Link>
    )
}