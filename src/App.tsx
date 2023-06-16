import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CapViewPage from "./pages/CapViewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/capview",
    element: <CapViewPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
