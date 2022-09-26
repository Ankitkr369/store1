import { Route, Routes } from 'react-router-dom';
import CartItem from './components/CartItem';
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart'
function AllRoutes(){

return(
<Routes>

<Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/cart" element={ <Cart /> } />
        
        <Route path="/cartItem" element={ <CartItem /> } />
</Routes>



)



}
export default AllRoutes;