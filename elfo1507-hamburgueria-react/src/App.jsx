import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ProductList from "./components/Product/ProductList/ProductList";
import Global from "./styles/global";
import { Main } from "./styles/main";

function App() {
  const [lista, setLista] = useState([]);
  const [cart, setCart] = useState([]);
  const [filtro, setFiltro] = useState("");
  return (
    <div className="App">
      <ToastContainer />
      <Global />
      <Header setFiltro={setFiltro} />
      <Main>
        <ProductList
          setFiltro={setFiltro}
          filtro={filtro}
          setLista={setLista}
          lista={lista}
          setCart={setCart}
          cart={cart}
        />
        <Cart cart={cart} setCart={setCart} filtro={filtro} />
      </Main>
    </div>
  );
}

export default App;
