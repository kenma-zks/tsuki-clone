import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ViewPage from "./pages/ViewPage";
import OurResponsibility from "./pages/OurResponsibility";
import Sale from "./pages/Sale";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
