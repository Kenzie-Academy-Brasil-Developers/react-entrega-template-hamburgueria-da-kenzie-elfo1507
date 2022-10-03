import { CardImg, CartCard } from "../../../styles/cart";

function CartItem({ nome, img, tipo, id, cart, setCart }) {
  return (
    <CartCard>
      <CardImg src={img} alt="" />
      <div>
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
      </div>
    </CartCard>
  );
}

export default CartItem;
