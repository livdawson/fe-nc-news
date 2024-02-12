import Select from "react-select";

export default function SortArticles({sortBy, setSortBy, order, setOrder}) {

  const options = [
    { value: "created_at", label: "Date" },
    { value: "comment_count", label: "Comment Count" },
    { value: "votes", label: "Votes" },
  ];

  const dateOrder = [
    { value: "desc", label: "Newest to oldest" },
    { value: "asc", label: "Oldest to newest" },
  ];

  const commentVoteOrder = [
    { value: "desc", label: "High to low" },
    { value: "asc", label: "Low to high" },
  ];

  function handleUnsort() {
    setSortBy(null);
    setOrder(null)
  }


  return (
    <div className="sort-articles-box">
      <label htmlFor="sortDropdown">Sort articles by: </label>
      <Select
        id="sortDropdown"
        options={options}
        value={ sortBy ? options.find(option => option.value === sortBy) : null}
        onChange={(selectedOption) => setSortBy(selectedOption.value)}
        />
      {sortBy === "created_at" ? (
          <div>
          <label htmlFor="dateOrderDropDown">Order by:</label>
          <Select
            id="dateOrderDropDown"
            options={dateOrder}
            value={dateOrder.find(option => option.value === order)}
            onChange={(selectedOption) => setOrder(selectedOption.value)}
            />
        </div>
      ) : null}
      {sortBy === "comment_count" || sortBy === "votes" ? (
          <div>
          <label htmlFor="commentVoteOrderDropDown">Order:</label>
          <Select
            id="commentVoteOrderDropDown"
            options={commentVoteOrder}
            value={commentVoteOrder.find(option => option.value === order)}
            onChange={(selectedOption) => setOrder(selectedOption.value)}
            />
        </div>
      ) : null}
      <button onClick={handleUnsort}>Unsort</button>
    </div>
  );
}
