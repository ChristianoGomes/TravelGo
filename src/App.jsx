import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import BlogDetails from './pages/BlogDetails'
import PlacesRoute from './pages/PlacesRoute'
import NoPage from './pages/NoPage'
import './index.css';






function App() {
  

  return (
    <>
    
<BrowserRouter>
<Layout />
  <Routes>
<Route path="/" element={<Layout />}/>
<Route index element={<Home />}/>
<Route path="/about" element={<About />}/>
<Route path="/blogs" element={<Blogs />}/>
<Route path="/blogs/:id" element={<BlogDetails />}/>
<Route path="/best-places" element={<PlacesRoute />}/>
<Route path='*' element={<NoPage />}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
