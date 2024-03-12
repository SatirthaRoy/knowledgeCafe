import { createContext, useEffect, useState } from "react"
import Container from "./components/Container"
import Header from "./components/Header"

export const data = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState([]);

  useEffect(() => {
    fetch('/data.json')
    .then((response) => response.json())
    .then(data => setBlogs(data))
  }, [])

  return (
    <data.Provider value={{ blogs, bookmarks, setBookmarks, readTime, setReadTime }}>
      <div className="lg:w-11/12 w-[98%] mx-auto">
        <Header/>
        <Container/>
      </div>
    </data.Provider>
  )
}

export default App
