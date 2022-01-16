import './App.css';
import { Routes, Route } from "react-router-dom";
import { BookList } from './components/booklist/BookList';
import { BookDetail } from './components/bookDetail/BookDetail';
import { PageNotFound } from './components/pageNotFound/PageNotFound';
import { Header } from './components/header/Header';

function App() {
 
  return (
    <main className="rootContainer">
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/detail" element={<BookDetail language='' direction='' source='' comments='' />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}

export default App;

