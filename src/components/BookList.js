import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditBookForm from './EditBookForm'; // Import the EditBookForm component
import DeleteBookButton from './DeleteBookButton'; // Import the DeleteBookButton component

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleEditBook = async (updatedBook) => {
    try {
      // Send PUT request to update book on server
      const response = await axios.put(`http://localhost:3000/books/${updatedBook._id}`, updatedBook);
      const updatedBooks = books.map((book) => (book._id === updatedBook._id ? response.data : book));
      setBooks(updatedBooks); // Update local state with updated book data
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const handleDeleteBook = async (bookId) => {
    try {
      // Send DELETE request to delete book on server
      await axios.delete(`http://localhost:3000/books/${bookId}`);
      const filteredBooks = books.filter((book) => book._id !== bookId);
      setBooks(filteredBooks); // Update local state with filtered book data
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author}
            <EditBookForm book={book} onEditBook={handleEditBook} />
            <DeleteBookButton bookId={book._id} onDeleteBook={handleDeleteBook} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
