import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ fetchBooks }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/books', {
                title,
                author,
                published_date: publishedDate
            });
            fetchBooks();
            setTitle('');
            setAuthor('');
            setPublishedDate('');
        } catch (error) {
            console.error('Error adding book', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add a New Book</h1>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Author:</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div>
                <label>Published Date:</label>
                <input
                    type="date"
                    value={publishedDate}
                    onChange={(e) => setPublishedDate(e.target.value)}
                />
            </div>
            <button type="submit">Add Book</button>
        </form>
    );
};

export default BookForm;
