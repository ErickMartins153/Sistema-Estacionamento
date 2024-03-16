import { Link } from "react-router-dom";

export default function Slot({ slotDetails, onClick }) {
  return (
    <div>
      <Link onClick={onClick}>
        <button className="slot">{slotDetails}</button>
      </Link>
    </div>
  );
}
