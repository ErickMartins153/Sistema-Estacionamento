import { Link } from "react-router-dom";
import { getDriverDetails } from "../utils/requests";
import { convertvehicleType, vehicleTypeSanitizer } from "../utils/convert";

export default function Slot({
  slotDetails,
  onClick,
  showModal,
  mode,
  onSelectSlot,
  formFields,
}) {
  let style = "";
  const occupied = slotDetails.occupied;
  const preferential = slotDetails.spacePreferential ? "Preferencial" : "";

  if (occupied) {
    style += " bg-slate-400";
  }

  async function showInfos() {
    if (mode === "seeing") {
      if (!occupied) {
        alert("Esta vaga está livre!");
      }
      const driverDetails = await getDriverDetails(slotDetails.vehicleId);

      onClick(slotDetails, driverDetails);
      showModal();
    }
    if (mode === "selecting") {
      if (occupied) {
        alert("Essa vaga já está ocupada, por favor, escolha outra.");
      } else {
        const formVehicleType = vehicleTypeSanitizer(formFields.vehicleType);
        if (formVehicleType !== slotDetails.spaceType) {
          alert(
            "Esta vaga não aceita veículos do tipo " + formFields.vehicleType
          );
        } else {
          const { vehicleId, ...slotData } = slotDetails;
          onSelectSlot(slotData);
          showModal();
        }
      }
    }
    if (mode === "leaving") {
      if (!occupied) {
        alert("Não há veículo nesta vaga!");
      } else {
        const driverDetails = await getDriverDetails(slotDetails.vehicleId);
        onSelectSlot({ ...slotDetails, ...driverDetails });
        showModal();
      }
    }
  }

  function disableHandler() {
    if (mode === "leaving") {
      return !occupied ? 1 : 0;
    }
    return occupied ? 1 : 0;
  }

  return (
    <div className={style}>
      <Link onClick={showInfos}>
        <button disable={disableHandler} className="slot">
          <p className="text-black">
            {convertvehicleType(slotDetails.spaceType) + " " + preferential}
          </p>
        </button>
      </Link>
    </div>
  );
}
