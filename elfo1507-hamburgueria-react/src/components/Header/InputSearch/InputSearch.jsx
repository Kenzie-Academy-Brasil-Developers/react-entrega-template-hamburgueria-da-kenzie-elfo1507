import { useState } from "react";
import { BtnMain, FormInput, Input } from "../../../styles/input";

function InputSearch({ setFiltro }) {
  const [butata, setButata] = useState("");
  return (
    <FormInput
      onSubmit={(event) => {
        event.preventDefault();
        setFiltro(butata);
      }}
    >
      <Input
        type="text"
        name="pesquisa"
        id="pesquisa"
        placeholder="Digite algo"
        onChange={(event) => setButata(event.target.value.toLowerCase())}
      />
      <BtnMain type="submit">Pesquisar</BtnMain>
    </FormInput>
  );
}

export default InputSearch;
