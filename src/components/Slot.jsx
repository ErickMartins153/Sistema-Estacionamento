import { Link } from "react-router-dom";
import { getDriverDetails } from "../utils/requests";

export default function Slot({
  slotDetails,
  onClick,
  showModal,
  mode,
  onSelectSlot,
}) {
  let style = "";
  const occupied = slotDetails.occupied;

  if (occupied) {
    style += " bg-slate-400";
  }

  async function showInfos() {
    if (mode === "seeing") {
      const driverDetails = await getDriverDetails(slotDetails.vehicleId);
      onClick(slotDetails, driverDetails);
      showModal();
    }
    if (mode === "selecting") {
      if (occupied) {
        alert("Essa vaga já está ocupada, por favor, escolha outra.");
      } else {
        const { vehicleId, ...slotData } = slotDetails;
        onSelectSlot(slotData);
        showModal();
      }
    }
  }

  return (
    <div className={style}>
      <Link onClick={showInfos}>
        <button disable={occupied ? 1 : 0} className="slot">
          <p className="text-black">{slotDetails.spaceId}</p>
        </button>
      </Link>
    </div>
  );
}
