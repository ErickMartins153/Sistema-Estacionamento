export default function Input({ label, labelKey, onChange, value }) {
  return (
    <div className="relative rounded-lg m-6">
      <input
        onChange={(e) => onChange(labelKey, e.target.value)}
        autoComplete="off"
        value={value}
        type="text"
        id={label + "input"}
        className="rounded-lg border-2 border-col relative border-black appearance-none focus:outline-none leading-3 py-3 bg-gray-100 pl-2"
      />
      <label
        htmlFor={label + "input"}
        className="absolute bg-gray-100 z-1 left-2 text-lg"
      >
        {label}
      </label>
    </div>
  );
}
