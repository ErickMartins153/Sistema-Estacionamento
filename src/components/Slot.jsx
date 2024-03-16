import { Link } from "react-router-dom";

export default function Slot({ slotDetails, onClick, selectable }) {
  let style = "";
  if (!selectable) {
    style += " bg-slate-400";
  }

  function notAvailableHandler() {
    alert("Essa vaga já está ocupada, por favor, escolha outra.");
  }

  return (
    <div className={style}>
      <Link onClick={selectable ? onClick : notAvailableHandler}>
        <button disable={selectable} className="slot">
          <p className="text-black">{slotDetails}</p>
        </button>
      </Link>
    </div>
  );
}
