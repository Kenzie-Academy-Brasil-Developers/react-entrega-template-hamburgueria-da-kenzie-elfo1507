import { ProdList } from "../../../styles/item";
import Product from "../Product";

function getItems(setLista, filtro) {
  fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((res) => res.json())
    .then((res) => setLista(res));
}

function ProductList({ setLista, lista, setCart, cart, setFiltro, filtro }) {
  getItems(setLista);
  return (
    <ProdList>
      {lista
        .filter((el) => el.name.toLowerCase().includes(filtro))
        .map((element, index) => {
          return (
            <Product
              cart={cart}
              src={element.img}
              nome={element.name}
              tipo={element.category}
              preco={element.price}
              id={element.id}
              setCart={setCart}
              key={index}
            />
          );
        })}
    </ProdList>
  );
}

export default ProductList;
