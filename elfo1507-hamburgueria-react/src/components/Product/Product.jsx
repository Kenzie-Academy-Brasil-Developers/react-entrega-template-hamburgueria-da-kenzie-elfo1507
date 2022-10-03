import { BtnMain } from "../../styles/input";
import {
  ImgItem,
  PrecoProd,
  Prod,
  TipoProd,
  TituloProd,
} from "../../styles/item";

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
          if (!cart.includes((el) => cart.find(el))) {
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
            console.log("ja tem");
          }
        }}
      >
        Adicionar
      </BtnMain>
    </Prod>
  );
}

export default Product;
