import { useState } from 'react';
import Cart from './components/Cart';
import Deserts from './components/Deserts';

function App() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const handleAddCart = (desert) => {
    setCart([...cart, desert]);
    const priceOfItem = desert.price;
    setPrice(price + priceOfItem);
  };

  return (
    <>
      <main className="container mx-auto flex gap-7 my-4">
        <Deserts handleAddCart={handleAddCart}></Deserts>
        <Cart cart={cart} price={price}></Cart>
      </main>
    </>
  );
}

export default App;
