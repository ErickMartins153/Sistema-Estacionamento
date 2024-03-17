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
        options={["Carro", "Moto", "Onibus"]}
      />
      <Select
        label="Preferencial"
        labelKey="preferential"
        onChange={onChange}
        value={preferencialValue}
        options={["Sim", "Não"]}
      />
      <div className="flex gap-4 mb-8">
        <button onClick={() => navigate(-1)}>Cancelar</button>
        <button onClick={onSubmit}>Registrar</button>
      </div>
    </form>
  );
}
