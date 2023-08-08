import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
/* eslint-disable react/prop-types */
const EditBook = ({books,handleEdit,editTitle, setEditTitle,editAuthor, setEditAuthor}) => {

	const {id} = useParams();
	const editedBook = books.find((book) => (book.id).toString() === id);

	useEffect(() => {
    if (editedBook) {
      setEditTitle(editedBook.title);
      setEditAuthor(editedBook.author);
    }
  }, [editedBook, setEditTitle, setEditAuthor]);

	return (
    <div>
      <h2 className="my-4 text-center">Edit Books Form</h2>
      {editTitle && editAuthor && (
        <div className="container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                className="form-control mb-3"
                name="author"
                value={editAuthor}
                onChange={(e) => setEditAuthor(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-info"
              onClick={() => handleEdit(editedBook.id)}
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {!editTitle && !editAuthor && (
        <div>
          <h3 className="ms-5">Book Not Found</h3>
          <p>
            <Link to="/" className="ms-5">
              Go Back Home
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
export default EditBook;