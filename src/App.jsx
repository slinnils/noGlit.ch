import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import Blog from "./pages/Blog.jsx";
import RootLayout from "./pages/root-layout/RootLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LabLayout from "./pages/lab/LabLayout.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "laboratory",
          element: <LabLayout />,
          children: [
            {
              path: ":component",
            },
          ],
        },
        {
          path: "blog",
          element: <Blog />,
        },
      ],
    },
  ]);

  return (
    <div className="h-dvh w-full bg-lab-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
