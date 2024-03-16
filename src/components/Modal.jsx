export default function Modal({ children, open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-[#0000004d] z-50">
      <div className="px-24 py-6 my-36 bg-white rounded-xl flex flex-1 flex-col justify-between">
        {children}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
