import React, { useState } from 'react';

function EditBookForm({ book, onEditBook }) {
  const [title, setTitle] = useState(book.title); // Pre-fill form with book data
  const [author, setAuthor] = useState(book.author); // Pre-fill form with book data

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { ...book, title, author }; // Create a new object with updated data
    onEditBook(updatedBook); // Call the provided function to handle update logic on the server
    setTitle(''); // Clear form fields after submission (optional)
    setAuthor(''); // Clear form fields after submission (optional)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="author">Author:</label>
      <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Update Book</button>
    </form>
  );
}

export default EditBookForm;
