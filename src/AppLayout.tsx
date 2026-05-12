import { useState } from "react";
import { Outlet } from "react-router";
import FooterComponent from "./components/Footer";
import Toolbar from "./components/Toolbar";
import Menu from "./components/Menu";

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative gradient-page flex min-h-screen justify-center overflow-hidden px-6">

        <Toolbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Outlet/>

        <FooterComponent/>
    </main>
  );
}