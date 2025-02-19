import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
// Другие страницы и компоненты

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Добавьте остальные маршруты */}
      </Routes>
    </Router>
  );
}

export default App; 