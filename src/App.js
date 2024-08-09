import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Courses from './Page/Courses';
import FAQ from './Page/FAQ';
import Blog from './Page/Blog';
import Login from './Page/Login';
import Signup from './Page/Signup';
import Pages from './Page/Pages';
import { CartProvider } from 'react-use-cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <div className='App'>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/login' element={<Login />} />
              <Route path='/pages' element={<Pages />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/blog' element={<Blog />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
