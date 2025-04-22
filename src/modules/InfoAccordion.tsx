import {Accordion, AccordionItem} from "@heroui/accordion";
import InfoProgram from "./InfoProgram";
import InfoOther from "./InfoOther";
import InfoPeople from "./InfoPeople";
import InfoCeremony from "./InfoCeremony";
import InfoDriveOver from "./InfoDriveOver";
import InfoStatek from "./InfoStatek";
import InfoChildren from "./InfoChildren";
import InfoTaxi from "./InfoTaxi";


export default function InfoAccordion() {

    const itemClasses = {
      base: "py-0 w-full text-left bold",
      title: "font-bold",
      trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
      indicator: "text-medium",
      content: "text-small px-4 pb-6",
    };

  return (
    <div className="font-sans">
      <Accordion variant="splitted" itemClasses={itemClasses}>
        <AccordionItem key="1" title="Obřad">
          <InfoCeremony />
        </AccordionItem>
        <AccordionItem key="2" title="Pro neřidiče">
          <InfoTaxi />
        </AccordionItem>
        <AccordionItem key="3" title="Cesta ze zámku na Statek">
          <InfoDriveOver />
        </AccordionItem>
        <AccordionItem key="4" title="Odpolední setkání na Statku 1738">
          <InfoStatek />
        </AccordionItem>
        <AccordionItem key="5" title="Přibližný Harmonogram dne">
          <InfoProgram />
        </AccordionItem>
        <AccordionItem key="6" title="Jak, kam a co s dětmi">
          <InfoChildren />
        </AccordionItem>        
        <AccordionItem key="7" title="Pár dalších informací">
          <InfoOther />
        </AccordionItem>
        <AccordionItem key="8" title="Seznam Hostů">
          <InfoPeople />
        </AccordionItem>
      </Accordion>
      </div>
  );
}
