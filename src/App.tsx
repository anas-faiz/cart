import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./component/Product"
import Cart from "./component/Cart"
import ProductList from "./component/ProductList"

function App(){
  return (
    <div className="w-full h-screen text-5xl">
      <BrowserRouter>
      <Product/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App