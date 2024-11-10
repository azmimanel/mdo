import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define the custom theme with Helvetica as the default font family
const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <BrowserRouter>
          {/* Header is displayed on every page */}
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/produits' element={<Products />} />
          </Routes>

          {/* Footer is displayed on every page */}
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
