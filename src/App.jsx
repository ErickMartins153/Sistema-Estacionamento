import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainScreen from "./screens/MainScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PageLayout from "./components/PageLayout";
import ParkingLotScreen from "./screens/ParkingLotScreen";
import LeaveScreen from "./screens/LeaveScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { path: "", element: <MainScreen /> },
      { path: "add", element: <RegisterScreen /> },
      { path: "parkingLot", element: <ParkingLotScreen /> },
      { path: "leave", element: <LeaveScreen /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
