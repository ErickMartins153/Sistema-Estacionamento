import { Link } from "react-router-dom";
import Slot from "../components/Slot";
import Modal from "../components/Modal";
import { useState } from "react";
import InfoContent from "../components/InfoContent";

const DUMMY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ParkingLotScreen() {
  const [isOpen, setIsOpen] = useState(false);

  function modalHandler() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <Modal open={isOpen} onClose={modalHandler}>
        <h1>Informações</h1>
        <div>
          <InfoContent label="Nome" value="teste" />
          <InfoContent label="Placa" value="abc" />
          <InfoContent label="Tipo" value="Carro" />
          <InfoContent label="Preferencial" value="Sim" />
        </div>
      </Modal>
      <div className="ml-4 mt-4">
        <Link to="..">Voltar</Link>
      </div>
      <h1 className="text-center mt-12">Ver estacionamento</h1>
      <div className="bg-gray-300 mx-2 mb-2 rounded-xl shadow-md overflow-hidden border-[1px] border-gray-400">
        <div className="m-4 parking-6">
          {DUMMY.map((value) => (
            <Slot slotDetails={value} key={value} onClick={modalHandler} />
          ))}
        </div>
      </div>
    </>
  );
}
