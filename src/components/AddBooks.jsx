/* eslint-disable react/prop-types */
const AddBooks = ({handleChange, handleSubmit, inputs}) => {
	return (
    <div>
      <h2 className="my-4 text-center">Add Books Form</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
							name="title"
              className="form-control"
              placeholder="Enter Title"
							value={inputs.title}
							onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input
              type="text"
							name="author"
              className="form-control mb-3"
              placeholder="Enter Author"
							value={inputs.author}
							onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddBooks;