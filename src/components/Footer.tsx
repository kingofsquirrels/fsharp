import { Instagram } from "lucide-react";
import fwlogo from "../assets/logo-folkwang.png";
import { Link } from "react-router-dom";

export default function FooterComponent() {
    return(
        <footer className="absolute bottom-0 left-0 w-full text-amber-100">
            <div className="group">
                <div className="absolute -bottom-367 -right-150 h-400 w-410 rounded-full bg-[#201f23] group-hover:-translate-1.5 transition ease-in-out duration-500" />

                <div className="bg-[#201f23] absolute w-125 bottom-0 right-0 pr-6 pb-7 ">
                    <div className="flex items-center justify-between  text-[#fea300] ">
                        <p className="text-sm font-semibold select-none">© {new Date().getFullYear()} f:SHARP Jazz Festival</p>
                        <Link to="/fsharp/impressum" className="text-sm font-semibold transition hover:text-amber-100">Impressum</Link>
                        <a href="https://www.instagram.com/f.sharp.festival/" className="transition hover:text-amber-100"><Instagram/></a>
                        <a href="https://www.folkwang-uni.de/" className="transition hover:grayscale-75 hover:brightness-150 mt-5">
                            <img
                                src={fwlogo}
                                alt="Folkwang Universität der Künste"
                                className="h-10 w-auto"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
