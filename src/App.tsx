import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

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
      

      
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="products" element={<Products />} />
    <Route path="gallery" element={<Gallery />} />
    <Route path="apps" element={<Apps />} />
    <Route path="showrooms" element={<Showrooms />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
</>
);
}

export default App;
