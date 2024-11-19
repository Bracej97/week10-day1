// App.js
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {

  const [page, setPage] = useState('home');

  // TODO: How doe sthe Layout component know which page to render?

  return (
    <Router>

      <Layout selectedPage={page} onSetPage={setPage}>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </Layout>
    </Router>
  );
}

export default App;
