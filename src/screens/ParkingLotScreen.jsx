import { Link } from "react-router-dom";
import Slot from "../components/Slot";

const DUMMY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ParkingLotScreen() {
  return (
    <>
      <div className="ml-4 mt-4">
        <Link to="..">Voltar</Link>
      </div>
      <h1 className="text-center mt-12">Ver estacionamento</h1>
      <div className="bg-gray-300 mx-2 mb-2 rounded-xl shadow-md overflow-hidden">
        <div className="m-4 parking-6">
          {DUMMY.map((value) => (
            <Slot slotDetails={value} key={value} />
          ))}
        </div>
      </div>
    </>
  );
}
