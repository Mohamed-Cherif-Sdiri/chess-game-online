import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/AboutPage/AboutPage';
import Blog from './pages/BlogPage/BlogPage';
import Home from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/LoginPage';
import Register from './pages/RegisterPage/RegisterPage';
function App() {
  return (
    <Router>
      <div className="App container">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
