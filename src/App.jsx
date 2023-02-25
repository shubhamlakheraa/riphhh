import { useState, useEffect } from 'react'
import './App.css'
import Result from "./components/results.jsx"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Search from "./components/search.jsx"

function App() {

  const[query, setquery] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      console.log(query)
    }, 3000)
    return() => clearTimeout(delay)
  }, [query])


  const[searchResults, setsearchResults] = useState(
    () => JSON.parse(localStorage.getItem("searchResults")) || []
  );

  useEffect(() => {
    localStorage.setItem("searchResults", JSON.stringify(searchResults))
  }, [searchResults])



  return (
    <div>
      <Router>
        <Routes>
          <Route
          path='/'
          element={<Search setquery={setquery} squery={query}  setsearchResults = {setsearchResults}/>}
          />
          <Route 
          path='/search' 
          element={<Result searchquery={query} searchResults={searchResults} setsearchResults = {setsearchResults} setquery={setquery}/>}
          />

        </Routes>
      </Router>

    </div>
  )
}

export default App
