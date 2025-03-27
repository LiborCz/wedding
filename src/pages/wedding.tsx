export default function Wedding() {
  return (
    <div className="w-full pb-20text-center no-scrollbar">
      <section className="h-full flex justify-center relative bg-stone-300">
        <img src="/img/bg-nadvori.png" className="w-4/5" />
        <div className="absolute left-0 bottom-0 w-full z-10">
          <img src="/img/us.png" className="w-1/5 m-2" alt="Us..." />
        </div>
          
        <div className="absolute left-0 mx-8 my-4">
          <img src="/img/ring.ico" className="logo w-10 h-10" alt="Rings..." />
          <span className="text-4xl sm:text-6xl lg:text-8xl">Libor & Regina</span>
        </div>

        <div className="absolute right-0 bottom-0 mr-10 mb-6 font-wedding2 text-3xl sm:text-4xl lg:text-6xl text-right">
          <span>Sobota 26. Dubna{' '}</span><br/>
          <span className="pt-5">Zámek Veltrusy</span>
        </div>
      </section>

      <section className="mt-20 p-10 font-sans text-xl sm:text-2xl lg:text-3xl drop-shadow-xl text-center">
        <p className="text-center mb-4">Srdečně Vás zveme na svatbu v Zámku Veltrusy</p>
        <p className="mb-20">...a postupně se zde objeví více informací...</p>

        <p className="mb-10">Budeme se moc těšit na setkání</p>

        <p className="mb-20">Libor & Regina</p>
      </section>

    </div>
  );
}
