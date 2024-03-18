export default function Select({ label, labelKey, options, onChange, value }) {
  return (
    <div className="relative m-6">
      <label htmlFor={label + "select"} className="absolute left-2 ">
        {label}
      </label>
      <select
        id={label + "select"}
        className="p-2 border bg-gray-300 rounded-xl"
        onChange={(e) => onChange(labelKey, e.target.value)}
        value={value}
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
