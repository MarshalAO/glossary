
import Header from './Header';
import Search from './Search';
import Main from './Main';
import Footer from './Footer';

import './App.css';

export default function App () {
  return (
    <div className="app">
      <Header/>
      <Search/>
      <Main/>
      <Footer/>
    </div>
  );
}
