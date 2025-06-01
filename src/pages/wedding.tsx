import InfoAccordion from "@/modules/InfoAccordion";
import {Image} from "@heroui/react";

export default function Wedding() {
  return (
    <div className="w-full py-1 lg:pt-1 text-center max-w-[90%] mx-auto relative bg-stone-300" style={{maxWidth:"1024px", padding:"1rem", marginTop:"0"}}>

      <div className="flex justify-center mb-4" style={{maxHeight:"80%", marginTop:"1rem", marginBottom:"2rem"}}>
        <Image src="/img/Dary.jpg" alt="Dary ze svatby" />
      </div>

      <p className="font-sans text-xs mb-6 mt-5" style={{color:"#CC0000", fontWeight:"bold"}}>NESMÍRNĚ DĚKUJEME ZA VAŠI ÚČAST - BYLO TO KRÁSNÉ A MOC JSME SI TO UŽILI - DOUFÁME, ŽE I VY !!</p>

      <p className="font-sans text-xs mb-6 mt-5" style={{color:"#CC0000", fontWeight:"bold"}}>
        WE ARE VERY GRATEFUL FOR YOUR PRESENCE - IT WAS AWSOME AND WE ENJOYED IT SO MUCH ! - HOPING YOU DID TOO !!
      </p>

      <p className="font-sans text-[80%] mb-6" style={{fontSize:"0.6rem"}}>
        FOR ENGLISH CONTENT PLEASE TRANSLATE THE PAGE USING GOOGLE
      </p>

      <p className="font-sans text-[80%] mb-2 p-1" style={{fontSize:"0.8rem"}}>
        Děkujeme moc za všechny Vaše dárky, příspěvky, překvapení - ale hlavně za to, že jste k nám na svatbu dorazili, ať už jen na chvilku na samotný obřad (o to víc si toho vážíme) a nebo pak jste s námi strávili čas i při odpoledním pohoštění - bylo nám ctí a radostí se s Vámi potkat a slavit s Vámi. Svou velkou účastí jste nám udělali obrovskou radost.
      </p>

      <p className="font-sans text-[80%] mb-4 p-1" style={{fontSize:"0.8rem", fontWeight:"bold"}}>
        Ohledně fotek - dnes jsme fotky společně s fotoalbem obdrželi - odkaz najedete níže - ale ještě jsem nestačil všechny projít a vybrat - zkusím hned zítra nebo pozítří - tudiž zatim dám do složky pod odkazem jen pár, takovou ochutnávku :-)... (ale pak přidám i ty, kde jsme společně s Vámi)<br />
        PS: Je tam i ty se všemi hosty na obřadu, ty jsem nechal ve větším rozlišení, aby se daly trochu přiblížit... 
      </p>


      <InfoAccordion />

      <p className="font-sans text-xs mb-6 mt-10">**** poslední aktualizace: 1.června 00:00 ****</p>

    </div>
  );
}
