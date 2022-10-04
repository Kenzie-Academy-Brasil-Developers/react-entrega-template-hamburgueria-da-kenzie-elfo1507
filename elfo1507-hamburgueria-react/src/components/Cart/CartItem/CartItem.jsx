import { CardImg, CartCard, CartItemsCont } from "../../../styles/cart";

function CartItem({ nome, img, tipo, id, cart, setCart }) {
  return (
    <CartCard>
      <CardImg src={img} alt="" />
      <CartItemsCont>
        <div>
          <h5>{nome}</h5>
          <p>{tipo}</p>
        </div>
        <button
          type="button"
          id={id}
          onClick={() => {
            setCart(
              cart.filter((el) => {
                return el.id !== id;
              })
            );
          }}
        >
          remover
        </button>
      </CartItemsCont>
    </CartCard>
  );
}

export default CartItem;
