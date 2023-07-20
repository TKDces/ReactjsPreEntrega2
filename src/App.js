import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//Pages
import Nosotros from './pages/Nosotros'
import Noticias from './pages/Noticias'
import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { CartContext } from "./context/CartContext";
import { useEffect, useState } from "react";
import CartScreen from "./components/CartScreen/CartScreen";

const App = () => {

  const [ cart, setCart ] = useState([])

  const onAgregarCart = (item) => {
    setCart([...cart, item])
  }

  const onSumarCantidad = () => {
    return cart.reduce((acc, prod) => acc + prod.counter, 0)
  }

  const onPrecioTotal = (item) => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
  }

  const onEliminarItem = (item) => {
    setCart(cart.filter((prod) => prod.id !== item))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        onAgregarCart,
        onSumarCantidad,
        onPrecioTotal,
        onEliminarItem,
      }}
    >
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<ItemListContainer/>}/>
          <Route path={"nosotros"} element={<Nosotros/>}/>
          <Route path={"noticias"} element={<Noticias/>}/>
          <Route path={"category"} element={''}/>
          <Route path={"category/:categoryId"} element={<ItemList/>}/>

          <Route path={"item/:itemId"} element={<ItemDetailContainer/>}/>
          <Route path={"cart"} element={<CartScreen/>}/>
          <Route path="*" element={(
            <h1>404</h1>
          )}/>
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
