import { useState, useEffect } from "react";
import { getArticles, getTopics} from "../Utils/api";
import ArticleCard from "./ArticleCard";
import ArticleDetail from "./ArticleDetail";
import Error from "./Error";
import TopicSelector from "./TopicSelector";
import SortArticles from "./SortArticles";
import Expandable from "./Expandable";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getArticles(selectedTopic, sortBy, order), getTopics()])
    .then(([articles, topics]) => {
        setArticles(articles);
        setTopics(topics);
        setIsLoading(false);
    })
    .catch((err) => {
        setError(err);
    });
  }, [selectedTopic, sortBy, order]);

  function handleArticleSelect(articleId) {
    setSelectedArticleId(articleId);
  }

  if (error) {
    return (
      <Error message={"Sorry, we're unable to load articles at this time."} />
    );
  } else {
    return (
      <main className="articles-page">
        {isLoading ? (
          <p className="loading"><span class="fas fa-spinner fa-spin"></span> Fetching articles...</p>
        ) : (
          <section>
            <TopicSelector topics={topics} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
            <Expandable showButton={"Sort"}>
                <SortArticles sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}/>
            </Expandable>
            <div className="articles-list">
              {articles.map((article) => {
                return (
                  <ArticleCard
                    key={article.article_id}
                    article_id={article.article_id}
                    title={article.title}
                    imageUrl={article.article_img_url}
                    author={article.author}
                    comment_count={article.comment_count}
                    onSelectArticle={handleArticleSelect}
                  />
                );
              })}
            </div>
          </section>
        )}
        {selectedArticleId ? <ArticleDetail /> : null}
      </main>
    );
  }
}
