import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ABout from "./components/ABout.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import UserProfile from "./components/UserProfile.jsx";
import GitHub, { GitHubProfileInfo } from "./components/GitHub.jsx";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<ABout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/:userId" element={<UserProfile />} />
      <Route loader={GitHubProfileInfo} path="/github" element={<GitHub />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
