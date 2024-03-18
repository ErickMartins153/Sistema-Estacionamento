import { Link } from "react-router-dom";
import Slot from "../components/Slot";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import InfoContent from "../components/InfoContent";
import { getSlots } from "../utils/requests";
import { convertType } from "../utils/convert";

export default function ParkingLotScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const [slotDetails, setSlotDetails] = useState({});
  const [driverDetails, setDriverDetails] = useState({});
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    async function fetchSlots() {
      const slots = await getSlots();
      setSlots([...slots]);
    }
    fetchSlots();
  }, []);

  function modalHandler(slotDetails, driverDetails) {
    setSlotDetails(slotDetails);
    setDriverDetails(driverDetails);
  }

  function showModal() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <Modal open={isOpen}>
        <h1>Informações</h1>
        <div>
          <InfoContent label="Nome" value={driverDetails.ownerName} />
          <InfoContent label="Placa" value={driverDetails.licensePlate} />
          <InfoContent
            label="Tipo"
            value={convertType(slotDetails.spaceType)}
          />
          <InfoContent
            label="Preferencial"
            value={slotDetails.spacePreferential ? "Sim" : "Não"}
          />
        </div>
        <button onClick={showModal}>Fechar</button>
      </Modal>

      <div className="ml-4 mt-4">
        <Link to="..">Voltar</Link>
      </div>
      <h1 className="text-center mt-12">Ver estacionamento</h1>
      <div className="bg-gray-300 mx-2 mb-2 rounded-xl shadow-md overflow-hidden border-[1px] border-gray-400">
        <div className="m-4 parking-6">
          {slots.map((slot) => (
            <Slot
              slotDetails={slot}
              key={slot.spaceId}
              onClick={modalHandler}
              showModal={showModal}
            />
          ))}
        </div>
      </div>
    </>
  );
}
