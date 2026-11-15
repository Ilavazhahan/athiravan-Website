import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Apps from './pages/Apps';
import Showrooms from './pages/Showrooms';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/apps">Apps</Link></li>
          <li><Link to="/showrooms">Showrooms</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/showrooms" element={<Showrooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;