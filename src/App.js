import './App.css';
import Header from './components/Header';
import { Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
