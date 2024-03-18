import { Link, useNavigate } from "react-router-dom";
import Slot from "../components/Slot";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import InfoContent from "../components/InfoContent";
import { getPaymentData, getSlots } from "../utils/requests";
import { reaisFormatter } from "../utils/convert";

export default function LeaveScreen() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState({});
  const [confirmation, setConfirmation] = useState(false);
  const [paymentData, setPaymentData] = useState({});
  const [date, setDate] = useState({});

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

  async function confirmHandler() {
    const fetchPayment = await getPaymentData(selectedSlot);

    setPaymentData(() => ({ ...fetchPayment }));
    setDate({
      enterDate: new Date(fetchPayment.timestamps.enterTime),
      exitDate: new Date(fetchPayment.timestamps.exitTime),
    });
    setConfirmation(true);
  }

  function caloteHandler() {
    alert(
      "Parabéns " +
        selectedSlot.ownerName +
        "! Seu nome acaba de ser enviado pro SERASA! "
    );
    showModalHandler();
    navigate("..");
  }

  return (
    <>
      <Modal open={isOpen}>
        {!confirmation && (
          <>
            <h1>Tem certeza?</h1>
            <div>
              <InfoContent label="Nome" value={selectedSlot.ownerName} />
              <InfoContent label="Placa" value={selectedSlot.licensePlate} />
            </div>
            <div className="flex justify-evenly">
              <button onClick={showModalHandler} className="bg-red-600">
                Fechar
              </button>
              <button onClick={confirmHandler} className="bg-green-600">
                Confirmar
              </button>
            </div>
          </>
        )}
        {confirmation && (
          <>
            <h1>Nota de pagamento</h1>
            <div>
              <InfoContent
                label="Dia de hoje"
                value={date.enterDate.toLocaleDateString()}
              />
              <InfoContent
                label="Horário entrada"
                value={date.enterDate.toLocaleTimeString()}
              />
              <InfoContent
                label="Horário saída"
                value={date.exitDate.toLocaleTimeString()}
              />
              {}
              <InfoContent
                label="Taxa base"
                value={reaisFormatter(paymentData.baseRate)}
              />
              <InfoContent
                label="Taxa por hora"
                value={reaisFormatter(paymentData.hourlyRate)}
              />
              <InfoContent
                label="Valor total"
                value={reaisFormatter(paymentData.payment)}
              />
              {selectedSlot.spacePreferential && (
                <div className="flex flex-col gap-4 justify-center">
                  <p className="text-xs">*Vagas preferenciais não pagam</p>
                  <button
                    onClick={() => navigate("..")}
                    className="bg-green-600 flex flex-1 items-center justify-center"
                  >
                    Sair
                  </button>
                </div>
              )}
              {!selectedSlot.spacePreferential && (
                <div className="flex gap-2 mt-4 items-center justify-center">
                  <button
                    onClick={() => navigate("..")}
                    className="bg-green-600 flex flex-1 items-center justify-center"
                  >
                    Pagar
                  </button>
                  <button onClick={caloteHandler} className="bg-red-600 flex">
                    Dar calote
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </Modal>
      <div className="ml-4 mt-4">
        <Link to="..">Voltar</Link>
      </div>
      <h1 className="text-center">Sair com veículo</h1>
      <div className="bg-gray-300 mx-2 mb-2 rounded-xl shadow-md overflow-hidden border-[1px] border-gray-400">
        <div className="m-4 parking-6">
          {slots.map((slot) => {
            return (
              <Slot
                slotDetails={{ ...slot, date: "18/03/2024" }}
                key={slot.spaceId}
                mode="leaving"
                showModal={showModalHandler}
                onSelectSlot={selectSlotHandler}
                formFields=""
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
