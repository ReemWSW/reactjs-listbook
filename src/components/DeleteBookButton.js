function DeleteBookButton({ bookId, onDeleteBook }) {
  const handleDelete = () => {
    onDeleteBook(bookId); // Call the provided function to handle delete logic on the server
  };

  return (
    <button type="button" onClick={handleDelete}>
      Delete Book
    </button>
  );
}

export default DeleteBookButton;
