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
  let style = "bg-green-400";
  let textStyle = "";
  const occupied = slotDetails.occupied;
  const slotPreferential = slotDetails.spacePreferential;
  const slotVehicleType = slotDetails.spaceType;
  const formVehicleType = vehicleTypeSanitizer(formFields.vehicleType);
  const formPreferential = formFields.preferential === "Sim" ? true : false;
  const preferential = slotPreferential ? "Preferencial" : "";
  const formPreferentialText = formPreferential ? " Preferencial" : "";

  if (occupied) {
    style = " bg-slate-600";
    textStyle += " text-white";
  }

  if (mode === "selecting") {
    if (
      formVehicleType !== slotVehicleType ||
      formPreferential !== slotPreferential
    ) {
      style = " bg-red-600";
      textStyle += " text-white";
    }
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
        if (
          formVehicleType !== slotVehicleType ||
          formPreferential !== slotPreferential
        ) {
          alert(
            "Esta vaga não aceita veículos do tipo " +
              formFields.vehicleType +
              " " +
              formPreferentialText
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
          <p className={`text-black ${textStyle}`}>
            {convertvehicleType(slotVehicleType) + " " + preferential}
          </p>
        </button>
      </Link>
    </div>
  );
}
