import { createBrowserRouter } from "react-router";
import Spielplan from "./pages/Spielplan";
import Veranstaltungsorte from "./pages/Veranstaltungsorte";
import AppLayout from "./AppLayout";
import About from "./pages/About";
import Impressum from "./pages/Impressum";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";

export const router = createBrowserRouter([
  {
    path: "/fsharp",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/fsharp/about", element: <About /> },
      { path: "/fsharp/spielplan", element: <Spielplan /> },
      { path: "/fsharp/veranstaltungsorte", element: <Veranstaltungsorte /> },
      { path: "/fsharp/tickets", element: <Tickets /> },
      { path: "/fsharp/impressum", element: <Impressum /> },
    ],
  },
]);
