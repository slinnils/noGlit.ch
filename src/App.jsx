import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import RootLayout from "./pages/root-layout/RootLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LabComponent from "./pages/lab/LabComponent.jsx";
import ExperimentPlaceholder from "./components/lab/ExperimentPlaceholder.jsx";
import { fetchExperimentBySlug } from "./sanity/queries.js";

const Homepage = lazy(() => import("./pages/Homepage.jsx"));
const Blog = lazy(() => import("./pages/blog/Blog.jsx"));
const LabLayout = lazy(() => import("./pages/lab/LabLayout.jsx"));

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
            index: true,
            element: <ExperimentPlaceholder />,
          },
          {
            path: ":component",
            element: <LabComponent />,
            loader: ({ params }) => fetchExperimentBySlug(params.component),
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

function App() {
  return (
    <Suspense fallback={<p className="text-lab-text-muted">Lädt...</p>}>
    <RouterProvider router={router} />
  </Suspense>
  );
}

export default App;
