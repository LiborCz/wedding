import {Image} from "@heroui/react";

export default function InfoCeremony() {

  return (
    <div className="flex flex-col gap-4 mb-4 justify-center-safe">
      <div className="mb-4">
        <p className="pb-2">Svatebčané mohou až na parkoviště (1) přímo u zámku, 100m od vchodu na nádvoří (tudíž i přes dřívější zákaz vjezdu) - tam bude obsluha parkoviště, která by měla parkování organizovat.</p>
        <p>Dále tam také Ti, co s námi dále pokračují na Statek, obdrží myrty (Rozdá Eva a asi ji někdo pomůže)</p>
      </div>
      <div className="mb-4">
        <Image isZoomed src="/img/MapaZamku.png" alt="Mapa s body Zámku a Statku" />
      </div>
      <div className="mb-4">
        <p className="pb-2">Pokud by bylo deštivo (snad nebude) - nastala by tzv. mokrá varianta a obřad by se konal v <b>Rudolfově sále.</b></p>
        <p>Po obřadu není uplně kam spěchat, takže ať už jdete s námi dále na Statek či nikoliv, můžete si udělat procházku do zámecké zahrady (my si tam také budeme dělat ještě pár fotek a navíc - další program/raut na Statku bude až mezi 14 a 15 hodnou - tak aby jsme se na Statku neobjevili všichni naráz)</p>
      </div>
    </div>
  );
}
