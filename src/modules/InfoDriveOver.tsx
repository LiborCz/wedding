import {Image} from "@heroui/react";

export default function InfoDriveOver() {

  return (
    <div className="flex flex-col items-center gap-4 mb-4 justify-center-safe">

      <div className="mb-6">
        <p className="mb-2">Na přejezd ze zámku na Statek 1738 bych doporučoval asi tuto cestu (cca 15min) - <a href="https://mapy.com/s/hocetatusa" target="_blank"><u>Link</u></a><br/>Případně lze i nachat auto na parkovišti "U kempu" (parkoviště pro standardní návštěvníky Zámku) - a lze jít i hezkou procházkou pěšky podél vody. Nutno však vymyslet v tom případě i cestu zpět :-)</p>
        <Image isZoomed src="/img/MapaPrejezdu.png" alt="Mapa přejezdu ze zámku na Statek" />
      </div>
      <div className="mb-6">
        <p className="mb-2">Parkování na Statku 1738 - pokud bude místo, tak ideálně na červeně vyznačenych zónách nebo dle Vašeho uvážení</p>
        <Image isZoomed src="/img/MapaParkovani.png" alt="Mapa parkování na Statku" />
      </div>
    </div>
  );
}
