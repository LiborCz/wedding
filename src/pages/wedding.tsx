import InfoAccordion from "@/modules/InfoAccordion";
import {Image} from "@heroui/react";

export default function Wedding() {
  return (
    <div className="w-full py-1 lg:pt-2 text-center max-w-[90%] mx-auto relative bg-stone-300" style={{maxWidth:"1024px", padding:"1rem"}}>

      <div className="flex justify-center mb-4" style={{maxHeight:"80%", marginTop:"1rem", marginBottom:"2rem"}}>
        <Image src="/img/Pozvanka.jpg" alt="Tištěná svatební pozvánka" />
      </div>

      <InfoAccordion />

      <p className="font-sans text-xs mb-6 mt-10">**** průbežně budu informace níže aktualizovat - poslední aktualizace: 23.dubna 00:00 ****</p>
      
      <p className="font-sans text-xs mb-5">--- po svatbě zde naleznete též odkaz na fotky ---</p>

    </div>
  );
}
