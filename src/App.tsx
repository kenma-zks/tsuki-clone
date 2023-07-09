import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ViewPage from "./pages/ViewPage";
import OurResponsibility from "./pages/OurResponsibility";
import Sale from "./pages/Sale";
import Accessories from "./components/Accessories";
import AccessoriesPage from "./pages/AccessoriesPage";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/viewpage/:productId",
    element: <ViewPage />,
  },
  {
    path: "responsibility",
    element: <OurResponsibility />,
  },
  {
    path: "sale",
    element: <Sale />,
  },
  {
    path: "accessories",
    element: <AccessoriesPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
