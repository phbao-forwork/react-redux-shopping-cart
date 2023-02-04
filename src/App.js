import { Routes, Route } from 'react-router-dom';

import Cart from './components/Cart';
import Header from './components/Header';
import Products from './components/Products';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
