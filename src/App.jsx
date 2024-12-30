import { useState } from 'react'
import './App.css'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Company from './pages/Company'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
