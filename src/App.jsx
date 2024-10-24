import { useState } from "react"
import Cart from "./components/Cart"
import Deserts from "./components/Deserts"



function App() {
  const [cart, setCart] = useState([])
  
  const handleAddCart = (desert) => {
    setCart(desert)
    
  }

  return (
    <>
      <main className="container mx-auto flex gap-7 my-4">
        <Deserts handleAddCart={handleAddCart}></Deserts>
        <Cart cart={cart}></Cart>
      </main>
    </>
  )
}

export default App
