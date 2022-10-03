import { BtnMain } from "../../styles/input";
import {
  ImgItem,
  PrecoProd,
  Prod,
  TipoProd,
  TituloProd,
} from "../../styles/item";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ src, nome, tipo, preco, id, setCart, cart }) {
  return (
    <Prod>
      <ImgItem src={src} alt="" />
      <TituloProd>{nome}</TituloProd>
      <TipoProd>{tipo}</TipoProd>
      <PrecoProd>R${preco}</PrecoProd>
      <BtnMain
        type="button"
        id={id}
        onClick={() => {
          if (!cart.includes(cart.find((el) => el.id === id))) {
            console.log(id);
            setCart([
              ...cart,
              {
                name: nome,
                tipo: tipo,
                img: src,
                id: id,
                preco: preco,
              },
            ]);
          } else {
            toast.error("Item já existe no carrinho", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        }}
      >
        Adicionar
      </BtnMain>
    </Prod>
  );
}

export default Product;
