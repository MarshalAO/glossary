import { useEffect, useState } from 'react';
import Header from './Header';
import Search from './Search';
import Main from './Main';
import Footer from './Footer';

import './App.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) setSearchTerm(q);
  }, []);

  return (
    <div className="app">
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Main searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}
