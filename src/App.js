import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './common/Footer';
import Home from './components/views/Home';
import About from './components/views/About';
import BackToTop from './common/BackToTop';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;