import {Accordion, AccordionItem} from "@heroui/accordion";
import InfoLocations from "./InfoLocations";
import InfoPresents from "./InfoPresents";
import InfoOther from "./InfoOther";

export default function InfoAccordion() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const itemClasses = {
      base: "py-0 w-full text-left bold",
      title: "bold",
      trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
      indicator: "text-medium",
      content: "text-small px-4 pb-6",
    };

  return (
    <div className="font-sans">
      <Accordion variant="splitted" itemClasses={itemClasses}>
        <AccordionItem key="1" title="Kde bude probíhat obřad a hostina">
          <InfoLocations />
        </AccordionItem>
        {/* <AccordionItem key="2" title="Dotaz na dresscode a dary...">
          <InfoPresents />
        </AccordionItem> */}
        <AccordionItem key="3" title="Pár dalsích informací">
          <InfoOther />
        </AccordionItem>
      </Accordion>
      </div>
  );
}
