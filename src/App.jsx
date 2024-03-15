import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import MainScreen from "./screens/MainScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PageLayout from "./components/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { path: "", element: <MainScreen /> },
      { path: "add", element: <RegisterScreen /> },
      { path: "parkingLot", element: <RegisterScreen /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
