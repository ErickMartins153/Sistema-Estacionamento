import { Link, useNavigate } from "react-router-dom";
import Slot from "../components/Slot";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import InfoContent from "../components/InfoContent";
import { getSlots, registerVehicle } from "../utils/requests";

export default function SelectSLotScreen({ goBack, formFields }) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState({});

  useEffect(() => {
    async function fetchSlots() {
      const slots = await getSlots();
      setSlots([...slots]);
    }
    fetchSlots();
  }, []);

  function showModalHandler() {
    setIsOpen((prevState) => !prevState);
  }

  function selectSlotHandler(slotDetails) {
    setSelectedSlot(slotDetails);
  }

  function confirmHandler() {
    const hourlyRateWorkaround = selectedSlot["hourlyRate"];
    delete selectedSlot["hourlyRate"];
    const chosenSlot = { ...selectedSlot, hourly_rate: hourlyRateWorkaround };
    const vehicleData = { ...formFields, parkingSpace: { ...chosenSlot } };
    registerVehicle({ ...vehicleData });
    // navigate(-1);
    showModalHandler();
  }

  return (
    <>
      <Modal open={isOpen}>
        <h1>Confirmação</h1>
        <div>
          <InfoContent label="Nome" value={formFields.ownerName} />
          <InfoContent label="Placa" value={formFields.licensePlate} />
          <InfoContent label="Tipo" value={formFields.vehicleType} />
          <InfoContent label="Preferencial" value={formFields.preferential} />
          <InfoContent label="Taxa base" value={"R$20,00"} />
          <InfoContent label="Taxa por hora" value={"R$5,00"} />
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
          {slots.map((slot) => {
            return (
              <Slot
                slotDetails={{ ...slot, date: "18/03/2024" }}
                key={slot.spaceId}
                mode="selecting"
                showModal={showModalHandler}
                onSelectSlot={selectSlotHandler}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
