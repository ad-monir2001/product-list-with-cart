import { useState } from 'react';
import Cart from './components/Cart';
import Deserts from './components/Deserts';

function App() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const handleDeleteItem = (name,priceItem) => {
    const remainingItem = cart.filter((product) => product.name !== name);
    setCart(remainingItem);
    setPrice(price-priceItem)

  };

  const handleAddCart = (desert) => {
    setCart([...cart, desert]);
    const priceOfItem = desert.price;
    setPrice(price + priceOfItem);
  };

  return (
    <>
      <main className="container mx-auto flex gap-7 my-4">
        <Deserts handleAddCart={handleAddCart}></Deserts>
        <Cart
          cart={cart}
          price={price}
          handleDeleteItem={handleDeleteItem}
        ></Cart>
      </main>
    </>
  );
}

export default App;
