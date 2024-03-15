import { Link } from "react-router-dom";

import carroStarWars from "../assets/DarthVader-Matt.png";
import onibusStarWars from "../assets/Onibus-DarthVader.png";
import yodaMotoqueiro from "../assets/BabyYoda-Motoca.png";

export default function MainScreen() {
  return (
    <div className="svg-background flex flex-1 flex-row rounded-xl shadow-xl">
      <div className=" relative flex flex-1">
        <div id="carros" className=" flex flex-1 relative">
          <div className="w-72 absolute top-36">
            <img src={carroStarWars} className="w-full h-auto" />
          </div>
          <div className="w-72 absolute right-2">
            <img src={onibusStarWars} className="w-full h-auto" />
          </div>
          <div className="w-72 absolute bottom-0 right-2">
            <img src={yodaMotoqueiro} className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-evenly items-center ">
          <div className="rounded-full w-48 h-48 bg-[#122C34] flex items-center justify-center">
            <h2 className="text-[#EBF5EE] break-words text-center text-xl">
              Bem vindo ao Elstacionamento
            </h2>
          </div>
          <div className="flex flex-col gap-5 ">
            <Link to="add" style={undefined}>
              <button className="shadow-xl w-full">Cadastrar veículo</button>
            </Link>
            <Link to="parkingLot">
              <button className="shadow-xl w-full">Ver estacionamento</button>
            </Link>
            <button className="shadow-xl w-full">Sair com veículo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
