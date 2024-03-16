import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";
import { useState } from "react";

export default function RegisterScreen() {
  const [formFields, setFormFields] = useState({
    Nome: "",
    Placa: "",
    Tipo: "",
    Preferencial: "",
  });
  const navigate = useNavigate();

  function onChange(key, value) {
    setFormFields((formFields) => ({ ...formFields, [key]: value }));
  }

  function submitHandler() {
    for (const field in formFields) {
      if (formFields[field] === "") {
        alert("Todos os campos devem, obrigatoriamente, ser preenchidos!");
        return;
      }
    }
    alert(
      `
              nome: ${formFields.Nome}, 
              placa: ${formFields.Placa}, 
              tipo: ${formFields.Tipo}, 
              preferencial: ${formFields.Preferencial}`
    );
  }

  return (
    <>
      <h1 className="text-center mt-8">Resgistrar</h1>
      <div className="flex flex-1 flex-col justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          id="form"
          className="flex flex-col flex-1 items-center justify-center"
        >
          <Input label="Nome" onChange={onChange} value={formFields.Nome} />
          <Input label="Placa" onChange={onChange} value={formFields.Placa} />
          <Select
            label="Tipo"
            onChange={onChange}
            options={["Carro", "Moto", "Onibus"]}
          />
          <Select
            label="Preferencial"
            onChange={onChange}
            options={["Sim", "Não"]}
          />
          <div className="flex gap-4 mb-8">
            <button onClick={() => navigate(-1)}>Cancelar</button>
            <button onClick={submitHandler}>Registrar</button>
          </div>
        </form>
      </div>
    </>
  );
}
