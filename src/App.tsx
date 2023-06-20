import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ViewPage from "./pages/ViewPage";
import OurResponsibility from "./pages/OurResponsibility";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
