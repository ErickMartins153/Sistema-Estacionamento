import { Link } from "react-router-dom";

export default function Slot({ slotDetails }) {
  return (
    <div>
      <Link onClick={() => alert("botao " + slotDetails)}>
        <button className="slot" />
      </Link>
    </div>
  );
}
