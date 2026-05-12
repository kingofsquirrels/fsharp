import { SkipBack } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type MenuProps = {
    menuOpen: boolean,
    setMenuOpen: (arg0: boolean) => void,
}

export default function Menu( {menuOpen, setMenuOpen}: MenuProps) {
    const location = useLocation();

    return (
        <aside
            className={`fixed left-0 top-0 z-50 h-screen w-full bg-[#201f23] p-8 shadow-2xl transition-transform duration-600 ease-out ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            >
            <div className="mt-20 mx-15 flex items-center justify-end">
                <button
                    onClick={() => setMenuOpen(false)}
                    className={`flex cursor-pointer items-center text-amber-100 transition-all duration-200 hover:text-[#fea300] hover:-translate-x-2.5 ${menuOpen ? "opacity-100" : "opacity-0"}`}
                    aria-label="Open menu"
                >
                    <SkipBack height={50} width={50} strokeWidth={2.5} />
                </button>
            </div>

            <nav className="flex flex-col ml-20 mt-20 gap-15 text-6xl font-semibold">
                <Link 
                    to="/fsharp/about" 
                    onClick={() => setMenuOpen(false)}
                    className={`transition-all hover:italic  
                        ${location.pathname === "/fsharp/about"
                        ? "text-[#fea300] italic"
                        : "text-amber-100 gradient-text-hover duration-200"
                }`}>
                    f:SHARP?!
                </Link>

                <Link 
                    to="/fsharp/spielplan" 
                    onClick={() => setMenuOpen(false)}
                    className={`transition-all hover:italic duration-100 
                        ${location.pathname === "/fsharp/spielplan"
                        ? "text-[#fea300] italic"
                        : "text-amber-100 gradient-text-hover"
                }`}>
                    SPIELPLAN
                </Link>

                <Link 
                    to="/fsharp/veranstaltungsorte" 
                    onClick={() => setMenuOpen(false)}
                    className={`transition-all hover:italic duration-100 
                        ${location.pathname === "/fsharp/veranstaltungsorte"
                        ? "text-[#fea300] italic"
                        : "text-amber-100 gradient-text-hover"
                }`}>
                    VERANSTALTUNGSORTE
                </Link>

                <Link 
                    to="/fsharp/tickets" 
                    onClick={() => setMenuOpen(false)}
                    className={`transition-all hover:italic duration-100 
                        ${location.pathname === "/fsharp/tickets"
                        ? "text-[#fea300] italic"
                        : "text-amber-100 gradient-text-hover"
                }`}>
                    TICKETS
                </Link>

            </nav>
        </aside>
    )
}