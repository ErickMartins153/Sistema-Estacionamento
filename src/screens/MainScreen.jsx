import { Link } from "react-router-dom";

export default function MainScreen() {
  return (
    <>
      <h1 className="text-center mt-24">Bem vindo ao El estacionamento!</h1>
      <div className="flex flex-1 flex-col justify-center items-center">
        <div className="flex flex-col gap-5">
          <Link to="add" style={undefined}>
            <button className="shadow-xl">Adicionar veículo</button>
          </Link>
          <button className="shadow-xl">Ver estacionamento</button>
          <button className="shadow-xl">Sair</button>
        </div>
      </div>
    </>
  );
}
