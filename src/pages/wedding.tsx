import InfoAccordion from "@/modules/InfoAccordion";
import {Image} from "@heroui/react";

export default function Wedding() {
  return (
    <div className="w-full py-1 lg:pt-1 text-center max-w-[90%] mx-auto relative bg-stone-300" style={{maxWidth:"1024px", padding:"1rem", marginTop:"0"}}>

      <div className="flex justify-center mb-4" style={{maxHeight:"80%", marginTop:"1rem", marginBottom:"2rem"}}>
        <Image src="/img/Pozvanka.jpg" alt="Tištěná svatební pozvánka" />
      </div>

      <p className="font-sans text-xs mb-6 mt-5" style={{color:"#CC0000", fontWeight:"bold"}}>NESMÍRNĚ DĚKUJEME ZA VAŠI ÚČAST - BYLO TO KRÁSNÉ A MOC JSME SI TO UŽILI - DOUFÁME, ŽE I VY !!</p>

      <p className="font-sans text-xs mb-6 mt-5" style={{color:"#CC0000", fontWeight:"bold"}}>WE ARE VERY GRATEFUL FOR YOUR PRESENCE - IT WAS AWSOME AND WE ENJOYED IT SO MUCH ! - HOPING YOU DID TOO !!</p>

      <p className="font-sans text-[80%] mb-6" style={{fontSize:"0.6rem"}}>FOR ENGLISH CONTENT PLEASE TRANSLATE THE PAGE USING GOOGLE</p>

      <InfoAccordion />

      <p className="font-sans text-xs mb-6 mt-10">**** poslední aktualizace: 27.dubna 18:00 ****</p>

    </div>
  );
}
