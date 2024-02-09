import Select from 'react-select';
import { useState } from "react";

export default function SortArticles() {
    const [sortSelected, setSortSelected] = useState(false)
    const [sortBy, setSortBy] = useState('date');
    const [order, setOrder] = useState('asc');

    const options = [
        { value: 'created_at', label: 'Date' },
        { value: 'comment_count', label: 'Comment Count' },
        { value: 'votes', label: 'Votes' },
      ];

    const dateOrder = [
        { value: 'desc', label: 'Newest to oldest'},
        { value: 'asc', label: 'Oldest to newest'}
    ]

    const commentVoteOrder = [
        { value: 'desc', label: 'High to low'},
        { value: 'asc', label: 'Low to high'}
    ]

    return (
        <div className="sorting-container">
            <label htmlFor="sortDropdown">Sort articles by: </label>
            <Select id="sortDropdown" options={options} value={sortBy} onChange={(selectedOption) => setSortBy(selectedOption.value)}/>
            {sortBy === 'created_at' ? 
            <div>
             <label htmlFor="dateOrderDropDown">Order by:</label>
            <Select id="dateOrderDropDown" options={dateOrder} value={order} onChange={(selectedOption) => setOrder(selectedOption.value)}/> 
            </div>
            : null}
            { (sortBy === 'comment_count' || sortBy === 'votes') ? 
            <div>
                <label htmlFor="commentVoteOrderDropDown">Order by:</label>
                <Select id="commentVoteOrderDropDown" options={commentVoteOrder} value={order} onChange={(selectedOption) => setOrder(selectedOption.value)}/>
            </div> : null}
            <button>Sort</button>
        </div>
    )
}
