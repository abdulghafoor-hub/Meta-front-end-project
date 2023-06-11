import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './components/Products';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/bookinForm' element={<BookingForm />}></Route>
          <Route path='/products' element={<Products/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
