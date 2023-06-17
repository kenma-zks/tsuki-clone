import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ViewPage from "./pages/ViewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/viewpage",
    element: <ViewPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
