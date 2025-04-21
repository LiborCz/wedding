import {Image} from "@heroui/react";

export default function InfoStatek() {

  return (
    <div className="flex flex-col gap-4 mb-4 justify-center-safe">
      <div className="mb-6 flex flex-col justify-center items-center">
        <p className="mb-2"><b>Mapka Statku</b></p>
        <Image isZoomed src="/img/MapaStatek.png" className="mb-4" alt="Mapka budov Statku" />
        <p className="mb-4">My s pár lidma z rodiny a se svědky budeme mít nejdříve (14-15hod) spíše rodinný oběd dole v restauraci (modře)
        <br /><br />
        Raut pro naše hosty bude nachystán - také mezi 14 a 15hod v protější budově v konferenční místnosti (červěně). My se po rodinném obědě také  pak připojíme k Vám a přibližně v 15:15 by jsme nakrojili dort. Zhruba chvíli před 16hod by pak zazněla hudba k prvnímu tanci...
        <br/><br/>
        Raut bude průběžně doplňován a podle chuti se i později v průběhu odpoledne obmění - tudíž je dobré si "nechat místo" i na později :-)
        </p>

        <p className="mb-2">Statek není celý uzavřen pouze pro naši společnost, kromě nás tam budou i ubytovaní a jiní víkendoví návštěvníci, tudíž jsme domluveni, že máme k dispozici především konferenční místnosti a k nim přilehlé sezení.  Nicméně pokud budete mít chuť posedět a dát si něco v restauraci, je to na Vás ;-)</p>

        <p className="mb-2 w-full">Ať už na rautu nebo v restauraci, toto pití je na svatebčany (na baru restaurace stačí prozradit naše jméno, pokud by se ptali): &nbsp; pivo, limo/voda, kafe, víno (bílé Pinot Grigio a červené Primitivo), dále pak Aperol a Prosecco.
        </p>
      </div>
    </div>
  );
}
