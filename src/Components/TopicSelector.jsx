import { Link } from "react-router-dom";

export default function TopicSelector({topics, selectedTopic, setSelectedTopic}) {

    return (
        <div>
        <label>
        View articles about:
        {topics.map((topic, index) => {
            return (
              <Link to={`/articles?topic=${topic.slug}`}>
                <button
                key={index}
                value={selectedTopic}
                onClick={() => setSelectedTopic(topic.slug)}
                disabled={selectedTopic === topic.slug}
                >
              {topic.slug.charAt(0).toUpperCase()+topic.slug.slice(1)}
            </button>
            </Link>
          );
        })}
      </label>
      <Link to="/articles">
      <button
      onClick={() => setSelectedTopic("")}
      disabled={!selectedTopic}
      >
        All Articles
      </button>
      </Link>
      </div>
    )
}