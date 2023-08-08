import { useEffect, useState } from 'react'
import './index.css'
import { Routes, Route, useNavigate} from 'react-router-dom'
import api from "./api/books"
import Home from './components/Home'
import AddBooks from './components/AddBooks'
import EditBook from './components/EditBook'
import Navbar from './Navbar'

function App() {
  const [books, setBooks] = useState([])
  const [editTitle, setEditTitle] = useState('')
  const [editAuthor, setEditAuthor] = useState('')
  const [inputs, setInputs] = useState({
    title:'',
    author:''
  })
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books')
        setBooks(response.data)
      } catch (error) {
        if (error.response) {
          // error not in 200 range
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
      }else{
        // response received but something else happened
        console.log(` Error: ${error.message}`)
      }
    }
  }
    fetchBooks()
  }, [])

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newBook = {
      id:Math.floor(Math.random() * 1000),
      title: inputs.title,
      author: inputs.author
    }
    try {
      const response = await api.post('/books', newBook)
      const allBooks = [...books, response.data]
      setBooks(allBooks)
      setInputs({
        title:'',
        author:''
      })
    } catch (error) {
      if (error.response) {
        // response received but something else happened
        console.log(` Error: ${error.message}`)
      }
    }
  }

  const handleEdit = async (id) => {
    const updatedList = {id, title: editTitle, author: editAuthor}
    try {
      const response = await api.put(`/books/${id}`, updatedList)
      setBooks(books.map(book => book.id === id ? {...response.data} : book))
      setEditTitle('')
      setEditAuthor('')
      navigate("/")
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/books/${id}`)
      setBooks(books.filter(book => book.id!== id))
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home books={books} handleDelete={handleDelete} />} />
        <Route
          path="/add-books/:id"
          element={
            <AddBooks
              books={books}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              inputs={inputs}
              setInputs={setInputs}
            />
          }
        />
        <Route
          path="/edit-books/:id"
          element={
            <EditBook
              books={books}
              handleEdit={handleEdit}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editAuthor={editAuthor}
              setEditAuthor={setEditAuthor}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
