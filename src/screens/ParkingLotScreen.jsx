import { Link } from "react-router-dom";

export default function ParkingLotScreen() {
  return (
    <>
      <div className="ml-4 mt-4">
        <Link to="..">Voltar</Link>
      </div>
      <h1 className="text-center mt-12">Ver estacionamento</h1>
      <div className="bg-gray-300">
        <div className="m-4">
          <div className="slot"></div>
        </div>
      </div>
    </>
  );
}
