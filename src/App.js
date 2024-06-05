import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books', error);
        }
    };

    return (
        <div>
            <BookForm fetchBooks={fetchBooks} />
            <BookList books={books} />
        </div>
    );
};

export default App;
