
export default function Home() {

  return (
    <>
      <div 
        className="sonar flex absolute top-1/4 mr-40 h-100 w-200 text-9xl items-center justify-center select-none" 
        title="1. - 3. Juni 2026">
          <h1 className="float-a translate-2 mr-5 text-[#201f23]">1.</h1>
          <h1 className="float-b -translate-1 mr-10 text-[#201f23]">-</h1>
          <h1 className="float-c -translate-3 text-[#9a7cdb] opacity-90 mix-blend-color animate-pulse">3.</h1>
          <h1 className="float-d mr-10 opacity-90 text-[#1f3f9d]">6.</h1>
      </div>
      <div className="sonar flex absolute top-1/3 ml-50 pt-20 h-100 w-200 text-9xl items-center justify-center select-none" title="1. - 3. Juni 2026">
          <h1 className="float-a translate-y-2 mr-6 text-[#981e4d] opacity-90">2</h1>
          <h1 className="float-b translate-y-8 mr-5 text-[#db7cca] opacity-90 mix-blend-color animate-pulse">0</h1>
          <h1 className="float-c -translate-3 text-[#201f23] ">2</h1>
          <h1 className="float-d translate-y-7 opacity-80 text-[#1f3f9d]">6</h1>
      </div>
    </>
  );
}
