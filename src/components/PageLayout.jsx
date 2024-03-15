import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    <div className="border border-gray-400 border-solid flex-1 rounded-xl shadow-xl bg-gray-100 flex flex-col ">
      <Outlet />
    </div>
  );
}
