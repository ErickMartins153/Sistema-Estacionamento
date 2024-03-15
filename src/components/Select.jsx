export default function Select({ label, options }) {
  return (
    <div className="relative m-6">
      <label htmlFor={label + "select"} className="absolute">
        {label}
      </label>
      <select id={label + "select"} className="p-2">
        <option disabled selected>
          Selecione uma opção
        </option>
        {options.length > 0 &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
}
