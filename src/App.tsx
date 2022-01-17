import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BookList } from './components/booklist/BookList';
import { PageNotFound } from './components/pageNotFound/PageNotFound';
import { Header } from './components/header/Header';

function App() {
  return (
    <main className="rootContainer">
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </main>
  );
}

export default App;
