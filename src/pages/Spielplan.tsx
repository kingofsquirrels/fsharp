import { useState } from "react";

export default function Spielplan() {

  const [spieltag, setSpieltag] = useState('montag');

  const boxClasses =
      spieltag === "montag" ? "left-0 w-24"
    : spieltag === "dienstag" ? "left-72 w-31"
    : spieltag === "mittwoch" ? "left-150 w-34"
    : "";
  
  return (
      <>
      <div className="absolute top-65 w-2/3 bg-blue-400">
          {/** toolbar */}
          <div className="flex items-center pt-0.5 font-bold text-xl transition-all duration-150">

              <button
                  onClick={() => setSpieltag('montag')}
                  className={`transition-colors duration-150 opacity-90 cursor-pointer p-1 ${spieltag === "montag"
                      ? "text-amber-100"
                      : "text-[#2d1514] hover:text-amber-100"
                  }`}
                  >
                  MONTAG
              </button>
              <button
                  onClick={() => setSpieltag('dienstag')}
                  className={`transition-colors duration-150 absolute left-74 opacity-90 cursor-pointer p-1 ${spieltag === "dienstag"
                      ? "text-amber-100"
                      : "text-[#2d1514] hover:text-amber-100"
                  }`}
                  >
                  DIENSTAG
              </button>
              <button
                  onClick={() => setSpieltag('mittwoch')}
                  className={` transition-colors duration-150 absolute left-152 opacity-90 cursor-pointer p-1 ${spieltag === "mittwoch"
                      ? "text-amber-100"
                      : "text-[#2d1514] hover:text-amber-100"
                  }`}
                  >
                  MITTWOCH
              </button>
              
            
          </div>
          {/** selection box */}
          <div
          className={`
              absolute rounded-xl border-2 border-amber-100 top-0 h-10
              transition-all duration-700 ease-in-out
              ${boxClasses}
          `}
          />
      </div>
      <div className="absolute top-80 w-3/4 bg-amber-300 h-full">
          <div className="relative bg-amber-100 h-100 w-full">
              <span className="text-sm">16:30 - 17uhr</span>
          </div>
      </div>
      </>
    )
}