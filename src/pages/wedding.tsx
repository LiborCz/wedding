export default function Wedding() {
  return (
    <div className="w-full pb-4 lg:pb-20 text-center no-scrollbar">
      <section className="h-full flex justify-center relative bg-stone-300">
        <img src="/img/bg-nadvori.png" className="w-4/5" />
        <div className="absolute left-0 bottom-0 w-full z-10">
          <img src="/img/us.png" className="w-1/5 m-2" alt="Us..." />
        </div>
          
        <div className="absolute left-0 mx-8 my-4 top-2 md:top-4 lg:top-6">
          <img src="/img/ring.ico" className="logo absolute top-[-10px] left-[-10px] md:left-0 w-6 lg:w-10" alt="Rings..." />
          <span className="text-4xl sm:text-6xl lg:text-8xl mt-4">Libor & Regina</span>
        </div>

        <div className="absolute right-0 bottom-0 mr-10 mb-6 font-wedding2 text-2xl sm:text-3xl lg:text-5xl text-right">
          <span>Sobota 26. Dubna{' '}</span><br/>
          <span className="pt-5">Zámek Veltrusy</span>
        </div>
      </section>

      <section className="lg:mt-20 px-2 lg:px-10 pt-8 font-sans text-xl  drop-shadow-xl text-center flex flex-col items-center">
        <div>
          <p className="text-3xl lg:text-6xl mb-4">Srdečně Vás zveme na svatbu na Zámku Veltrusy</p>
          <p className="bold mb-10">dne 26.4.2025 ve 12:15</p>
        </div>
        
        <div className="w-3/4">
          <p className="text-2xl mb-6">Následně proběhne odpoledne svatební hostina na nedalekém statku ( 
          <a href="https://www.statek1738.cz"> <span className="underline">Statek 1738</span></a> ), kde lze zůstat i na noc.</p>
          <p className="text-lg mb-6">( Pokud uvažujete o přespání, dejte vědět, aby jsme domluvili velikost pokoje a nejlepší způsob rezervace. V okolí je možné si udělat hezkou procházku k nedalekému Labi nebo se projet po cyklostezce...)</p>

          <p className="text-2xl mt-10 mb-10">Poprosím co nejdříve o zpětnou vazbu, zda se s Vámi uvidíme a kolik Vás přijede.</p>

          <p className="text-small mb-10">--- později se na této stránce objeví více informací ---</p>
        </div>

        <div className="sm:text-2xl lg:text-3xl">
          <p className="mb-10 px-2">Budeme se moc těšit na setkání</p>
          <p className="mb:4 lg:mb-8">Libor & Regina</p>
        </div>

        <img src="/img/ring.ico" className="logo w-10 lg:w-14" alt="Rings..." />
      </section>

    </div>
  );
}
