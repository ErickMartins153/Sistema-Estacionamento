import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Form from "../components/Form";
import SelectSLotScreen from "./SelectSLotScreen";

export default function RegisterScreen() {
  const [isSelecting, setIsSelecting] = useState(false);
  const [formFields, setFormFields] = useState({
    Nome: "",
    Placa: "",
    Tipo: "",
    Preferencial: "",
  });

  function onChange(key, value) {
    setFormFields((formFields) => ({ ...formFields, [key]: value }));
  }

  function stepHandler() {
    setIsSelecting((prevState) => !prevState);
  }

  function submitHandler() {
    for (const field in formFields) {
      console.log(formFields[field]);
      if (formFields[field] === "") {
        alert("Todos os campos devem, obrigatoriamente, ser preenchidos!");
        return;
      }
    }
    stepHandler();
    // alert(
    //   `
    //           nome: ${formFields.Nome},
    //           placa: ${formFields.Placa},
    //           tipo: ${formFields.Tipo},
    //           preferencial: ${formFields.Preferencial}`
    // );
  }

  return (
    <>
      {!isSelecting && (
        <>
          <h1 className="text-center mt-8">Registrar</h1>
          <div className="flex flex-1 flex-col justify-center items-center">
            <Form
              nomeValue={formFields.Nome}
              placaValue={formFields.Placa}
              tipoValue={formFields.Tipo}
              preferencialValue={formFields.Preferencial}
              onSubmit={submitHandler}
              onChange={onChange}
            />
          </div>
        </>
      )}
      {isSelecting && (
        <SelectSLotScreen goBack={stepHandler} formFields={formFields} />
      )}
    </>
  );
}
