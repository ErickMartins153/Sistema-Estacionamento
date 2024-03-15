import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";

export default function RegisterScreen() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center mt-8">Resgistrar</h1>
      <div className="flex flex-1 flex-col justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          id="form"
          className="flex flex-col flex-1 items-center justify-center"
        >
          <Input label="Nome" />
          <Input label="Placa" />
          <Select label="Tipo" options={["Carro", "Moto", "Onibus"]} />
          <Select label="Preferencial" options={["Sim", "Não"]} />
          <div className="flex gap-4 mb-8">
            <button onClick={() => navigate(-1)}>Cancelar</button>
            <button>Registrar</button>
          </div>
        </form>
      </div>
    </>
  );
}
