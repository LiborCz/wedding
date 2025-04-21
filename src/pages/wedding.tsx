import InfoAccordion from "@/modules/InfoAccordion";
import {Image} from "@heroui/react";

export default function Wedding() {
  return (
    <div className="w-full pb-4 lg:pb-20 text-center max-w-[90%] mx-auto relative">

      <div className="flex justify-center mt-6 mb-6" style={{margin:"2rem 0", maxHeight:"90%"}}>
        <Image src="/img/Pozvanka.jpg" alt="Tištěná svatební pozvánka" />
      </div>

      <InfoAccordion />

      <p className="font-sans text-xs mb-6 mt-10">**** průbežně budu informace níže aktualizovat - poslední aktualizace: 22.dubna 00:00 ****</p>
      
      <p className="font-sans text-xs mb-10">--- po svatbě zde naleznete též odkaz na fotky ---</p>

    </div>
  );
}
