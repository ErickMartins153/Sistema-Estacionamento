import { Link, useNavigate } from "react-router-dom";
import Slot from "../components/Slot";
import Modal from "../components/Modal";
import { useState } from "react";
import InfoContent from "../components/InfoContent";

const DUMMY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function SelectSLotScreen({ goBack, formFields }) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const date = new Date();

  function modalHandler() {
    setIsOpen((prevState) => !prevState);
  }

  function confirmHandler() {
    alert("Veiculo placa " + formFields.Placa + " registrado");
    modalHandler();
    navigate(-1);
  }

  return (
    <>
      <Modal open={isOpen}>
        <h1>Confirmação</h1>
        <div>
          <InfoContent label="Nome" value={formFields.Nome} />
          <InfoContent label="Placa" value={formFields.Placa} />
          <InfoContent label="Tipo" value={formFields.Tipo} />
          <InfoContent label="Preferencial" value={formFields.Preferencial} />
          <InfoContent label="Data" value={date.toLocaleDateString()} />
          <InfoContent label="Horário" value={date.toLocaleTimeString()} />
          <div className="flex gap-2 mt-4">
            <button onClick={confirmHandler} className="bg-green-600">
              Confirmar
            </button>
            <button onClick={goBack}>Revisar dados</button>
          </div>
        </div>
      </Modal>
      <div className="ml-4 mt-4">
        <Link onClick={goBack}>Voltar</Link>
      </div>
      <h1 className="text-center">Registrar</h1>
      <div className="bg-gray-300 mx-2 mb-2 rounded-xl shadow-md overflow-hidden border-[1px] border-gray-400">
        <div className="m-4 parking-6">
          {DUMMY.map((value) => (
            <Slot
              slotDetails={value}
              key={value}
              onClick={modalHandler}
              selectable={value % 2 === 0 ? true : false}
            />
          ))}
        </div>
      </div>
    </>
  );
}
