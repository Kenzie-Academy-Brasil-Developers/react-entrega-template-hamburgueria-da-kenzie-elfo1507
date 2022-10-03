import HeaderStyle from "../../styles/header";
import InputSearch from "./InputSearch/InputSearch";
import Logo from "./Logo/Logo";

function Header({ setFiltro }) {
  return (
    <HeaderStyle>
      <Logo />
      <InputSearch setFiltro={setFiltro} />
    </HeaderStyle>
  );
}

export default Header;
