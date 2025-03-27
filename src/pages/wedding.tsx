export default function Wedding() {
  return (
    <div className="w-full pb-20 text-center no-scrollbar">
      <section className="h-full flex justify-center relative bg-stone-300">
        <img src="/img/bg-nadvori.png" className="w-4/5" />
        <div className="absolute left-0 bottom-0 w-full z-10">
          <img src="/img/us.png" className="w-1/5 m-2" alt="Us..." />
        </div>
          
        <div className="absolute left-0 mx-8 my-4">
          <img src="/img/ring.ico" className="logo w-4 lg:w-10" alt="Rings..." />
          <span className="text-4xl sm:text-6xl lg:text-8xl">Libor & Regina</span>
        </div>

        <div className="absolute right-0 bottom-0 mr-10 mb-6 font-wedding2 text-2xl sm:text-3xl lg:text-5xl text-right">
          <span>Sobota 26. Dubna{' '}</span><br/>
          <span className="pt-5">Zámek Veltrusy</span>
        </div>
      </section>

      <section className="lg:mt-20 p-10 font-sans text-xl  drop-shadow-xl text-center flex flex-col items-center">
        <div>
          <p className="text-3xl lg:text-6xl mb-4">Srdečně Vás zveme na svatbu na Zámku Veltrusy</p>
          <p className="bold mb-10">dne 26.4.2025 ve 12:15</p>
        </div>
        
        <div className="w-3/4">
          <p className="text-2xl mb-6">Následně proběhne odpoledne svatební hostina na nedalekém statku, kde je i možnost přespání.</p>
          <p className="text-2xl mb-10">Poprosím co nejdříve o zpětnou vazbu, zda se s Vámi uvidíme.</p>
          <p className="text-small mb-10">--- později se na této stránce objeví více informací ---</p>
        </div>

        <div className="sm:text-2xl lg:text-3xl">
          <p className="mb-10">Budeme se moc těšit na setkání</p>
          <p className="mb-20">Libor & Regina</p>
        </div>
      </section>

    </div>
  );
}
