import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { RequestService } from "./pages/RequestService";
import { TrackOrder } from "./pages/TrackOrder";
import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "request", Component: RequestService },
      { path: "track/:orderId", Component: TrackOrder },
      { path: "dashboard", Component: Dashboard },
      { path: "about", Component: About },
      { path: "*", Component: NotFound },
    ],
  },
]);
