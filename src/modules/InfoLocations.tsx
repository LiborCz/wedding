import {Image} from "@heroui/react";

export default function InfoLocations() {

  return (
    <div className="flex flex-col gap-4 mb-4 justify-center-safe">
      <div className="mb-6">
        <p className="mb-2">Zámek Veltrusy - svatebčané mohou až na parkoviště pro svatebčany - 100m od vchodu na nádvoří - na obr. Parking (1)</p>
        <Image isZoomed src="/img/MapaZamku.png" alt="Mapa s body Zámku a Statku" onClick={() => {window.open("/img/MapaZamku.png", "_blank");}} />
      </div>
      <div className="mb-6">
        <p className="mb-2">Přejezd ze zámku na Statek (hostinu) - <a href="https://mapy.com/s/hocetatusa" target="_blank"><u>Link</u></a></p>
        <img src="/img/MapaPrejezdu.png" alt="Mapa přejezdu ze zámku na Statek" />
      </div>
      <div className="mb-6">
        <p className="mb-2">Parkování na Statku 1738</p>
        <img src="/img/MapaParkovani.png" alt="Mapa parkování na Statku" />
      </div>
    </div>
  );
}
