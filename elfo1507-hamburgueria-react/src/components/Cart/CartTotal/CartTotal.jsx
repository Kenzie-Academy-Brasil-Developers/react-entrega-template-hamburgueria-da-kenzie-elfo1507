import { CartRemoveAll, CartTotalValue } from "../../../styles/cart";

function CartTotal({ cart, setCart }) {
  if (cart.length !== 0) {
    return (
      <CartTotalValue>
        <CartRemoveAll type="button" onClick={() => setCart([])}>
          Remover Tudo
        </CartRemoveAll>
        <p>
          Total: R$
          {parseFloat(
            cart.reduce((pv, cv) => parseFloat(pv) + parseFloat(cv.preco), 0)
          )}
        </p>
      </CartTotalValue>
    );
  } else {
    return (
      <CartTotalValue>
        <span>Total: R$0</span>
      </CartTotalValue>
    );
  }
}

export default CartTotal;
