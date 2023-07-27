import "./App.css";
import Listing from "./components/listing/Listing";
import { OriginalData } from "./components/listing/originalData";
import WarehouseDetail from "./components/warehouse/WarehouseDetail";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Login from "./components/login/Login";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <OriginalData />,
        },
        {
          path: "/listing",
          element: <Listing />,
        },
        {
          path: "/warehouse/:name",
          element: <WarehouseDetail />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className="app-container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
