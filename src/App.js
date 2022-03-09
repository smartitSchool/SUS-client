import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs/AboutUs';
import Authority from './Pages/Authority/Authority';
import Activities from './Pages/Activities/Activities';
import Donation from './Pages/Donation/Donation';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/authority' element={<Authority />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
