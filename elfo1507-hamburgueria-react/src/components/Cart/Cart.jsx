import { CartContainer, CartItems, CartTitle, EmptyCart } from "../../styles/cart";
import CartItem from "./CartItem/CartItem";
import CartTotal from "./CartTotal/CartTotal";

function Cart({ cart, setCart }) {
  return (
    <CartContainer>
      <CartTitle>Carrinho de compras</CartTitle>
      {cart.length !== 0 ? (
        <CartItems>
          {cart.map((element) => {
            return (
              <CartItem
                setCart={setCart}
                cart={cart}
                nome={element.nome}
                img={element.img}
                tipo={element.tipo}
                id={element.id}
                key={element.id}
              />
            );
          })}
        </CartItems>
      ) : (
        <EmptyCart>
          <p>Carrinho vazio</p>
        </EmptyCart>
      )}
      <CartTotal cart={cart} setCart={setCart} />
    </CartContainer>
  );
}

export default Cart;
