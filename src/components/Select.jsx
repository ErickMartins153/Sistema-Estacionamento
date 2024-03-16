export default function Select({ label, options, onChange }) {
  return (
    <div className="relative m-6">
      <label htmlFor={label + "select"} className="absolute">
        {label}
      </label>
      <select
        id={label + "select"}
        className="p-2"
        onChange={(e) => onChange(label, e.target.value)}
        defaultValue={1}
        style={{ width: 210 }}
      >
        <option></option>
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
