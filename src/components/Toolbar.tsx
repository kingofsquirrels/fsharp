import { SkipForward } from "lucide-react"
import { Link } from "react-router-dom"

type ToolbarProps = {
    menuOpen: boolean,
    setMenuOpen: (arg0: boolean) => void,
}

export default function Toolbar( {menuOpen, setMenuOpen}: ToolbarProps) {
return(
    <>
    {/* toolbar */}
            <div className="relative mt-10 mx-10 flex h-1/4 w-full items-center justify-center px-8"> 
                {/* menu icon */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className={`absolute left-8 flex cursor-pointer items-center text-[#2d1514] transition-all duration-200 hover:translate-x-2.5 hover:text-amber-100 ${menuOpen ? "opacity-0" : "opacity-100"}`}
                    aria-label="Open menu"
                    >
                    <SkipForward height={50} width={50} strokeWidth={2.5} />
                </button>
    
                {/* Center title */}
                <div className="flex mt-8 flex-col items-end justify-center" onClick={()=>{}}>
                    <Link to="/fsharp/" className="text-5xl font-bold tracking-tight text-[#2d1514] sm:text-7xl">
                        f:SHARP
                    </Link>
    
                    <h2 className="text-2xl font-bold text-amber-100 opacity-90">
                        Jazz Festival
                    </h2>
                </div>
            </div>
    </>
)
}