import Chart from "@/pages/Chart";
import Home from "@/pages/Home";
import Market from "@/pages/Market";
import Overview from "@/pages/Overview";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chart",
    element: <Chart />,
  },
  {
    path:"/market",
    element: <Market />
  },
  {
    path:"/overview",
    element: <Overview />
  }
]);

export default router;
