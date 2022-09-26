import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartItem from './components/CartItem';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart'

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
     
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/cart" element={ <Cart /> } />
        
        <Route path="/cart" element={ <CartItem /> } />
      </Routes>

    </main>
  );
}

export default App;