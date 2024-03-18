import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Select from "./Select";

export default function Form({
  onChange,
  nomeValue,
  placaValue,
  tipoValue,
  preferencialValue,
  onSubmit,
}) {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      id="form"
      className="flex flex-col flex-1 items-center justify-center"
    >
      <Input
        label="Nome"
        labelKey="ownerName"
        onChange={onChange}
        value={nomeValue}
      />
      <Input
        label="Placa"
        labelKey="licensePlate"
        onChange={onChange}
        value={placaValue}
      />
      <Select
        label="Tipo"
        labelKey="vehicleType"
        onChange={onChange}
        value={tipoValue}
        options={["Carro", "Moto", "Onibus", "Bicicleta"]}
      />
      <Select
        label="Preferencial"
        labelKey="preferential"
        onChange={onChange}
        value={preferencialValue}
        options={["Sim", "Não"]}
      />
      <div className="flex gap-4 mb-8">
        <button onClick={() => navigate(-1)} className="bg-red-600">
          Cancelar
        </button>
        <button onClick={onSubmit} className="bg-green-600">
          Registrar
        </button>
      </div>
    </form>
  );
}
