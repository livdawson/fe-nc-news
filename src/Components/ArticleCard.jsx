export default function ArticleCard({title, imageUrl, author}) {
    return (
        <section className="article-card">
        <h3>{title}</h3>
        <img src={imageUrl} alt={`image for article titled ${title}`}/>
        <h4>Written by: {author}</h4>
        </section>
    )
}