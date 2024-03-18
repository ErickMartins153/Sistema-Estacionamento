import { useState } from "react";

import Form from "../components/Form";
import SelectSLotScreen from "./SelectSLotScreen";

export default function RegisterScreen() {
  const [isSelecting, setIsSelecting] = useState(false);
  const [formFields, setFormFields] = useState({
    ownerName: "",
    licensePlate: "",
    vehicleType: "",
    preferential: "",
  });

  function onChange(key, value) {
    setFormFields((formFields) => ({ ...formFields, [key]: value }));
  }

  function stepHandler() {
    setIsSelecting((prevState) => !prevState);
  }

  function submitHandler() {
    for (const field in formFields) {
      if (formFields[field].trim() === "") {
        alert("Todos os campos devem, obrigatoriamente, ser preenchidos!");
        return;
      }
    }
    stepHandler();
  }

  return (
    <>
      {!isSelecting && (
        <>
          <h1 className="text-center mt-8 ">Registrar</h1>
          <div className="flex flex-1 flex-col justify-center items-center">
            <Form
              nomeValue={formFields.ownerName}
              placaValue={formFields.licensePlate}
              tipoValue={formFields.vehicleType}
              preferencialValue={formFields.preferential}
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
