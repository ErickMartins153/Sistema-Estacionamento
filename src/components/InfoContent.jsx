export default function InfoContent({ label, value }) {
  return (
    <div className="flex justify-between pr-20">
      <p className="text-center">{label}:</p>
      <p className="border-b-2 border-black w-24 text-center">{value}</p>
    </div>
  );
}
