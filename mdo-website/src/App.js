import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}> </Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/produits' element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
