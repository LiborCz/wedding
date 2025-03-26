export default function Wedding() {
  return (
    <section className="m-10 h-full flex flex-col items-center relative">
      <img src="/img/bg-nadvori.png" className="w-4/5" />
      <div className="absolute left-0 bottom-0 w-full z-10">
        <img src="/img/us.png" className="w-1/5" alt="Us..." />
      </div>
        
      <div className="absolute left-0">
          
        <img src="/img/ring.ico" className="logo w-10 h-10" alt="Rings..." />
        <span className="font-wedding w-full text-4xl sm:text-6xl lg:text-8xl">Libor & Regina</span>
      </div>
        
    </section>
  );
}
