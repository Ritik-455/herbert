import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './common/Footer';
import Home from './components/views/Home';
import About from './components/views/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sources' element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;