import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import { Home } from "./pages/Home";
import { Testing } from "./pages/Testing";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Layout />}
        errorElement={<h1>Path not found</h1>}
      >
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
        {/* Add more routes here as needed */}
      </Route>
    </>
  )
);
