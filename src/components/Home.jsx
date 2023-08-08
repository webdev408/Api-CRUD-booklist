import {Link} from 'react-router-dom'
/* eslint-disable react/prop-types */
const Home = ({books, handleDelete}) => {
	return (
    <div>
      <h2 className="my-4 text-center">Book List</h2>
      <div className="container">
        <table className="table table-stripped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Link to={`/edit-books/${book.id}`} className='btn btn-sm btn-warning me-2'>Edit</Link>
                  <button className="btn btn-sm btn-danger" onClick={()=>
										handleDelete(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Home;