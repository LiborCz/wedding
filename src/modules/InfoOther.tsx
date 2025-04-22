import { Image } from "@heroui/react";


export default function InfoOther() {

  return (
    <div className="flex flex-col gap-4 mb-4 justify-center-safe">
      <div className="my-2">
        <p ><b>Oblečení - dresscode:</b> oblékněte se v duchu neformální elegance – chceme, abyste se cítili pohodlně a stylově. :-)</p>
      </div>

      <div className="my-2">
        <p ><b>Vaši další mazlíčci:</b> na Statku bohužel uvádí, že na domácí mazlíčky nejsou moc připraveni, tak asi bude lepší je tentokrát nechat doma</p>
      </div>

      <div className="mt-2">
        <p><b>Dary:</b> Dárky si nepřejeme, už jen to, že Vás všechny uvidíme takto pohromadě a že jste k nám vážili cestu, mnohdy až z dalleka, nám udělá radost :-) Pokud nás ale přesto chcete obdarovat, potěší nás menší finanční příspěvek dle Vašeho uvážení, který využijeme na financování svatební hostiny (případně i svatební cesty). &nbsp;
        {(new Date())<=new Date("2025-04-26")
        ? 
        "A aby vše vyšlo, QR kód či údaje k příspěvku se zde objeví až v den svatby.... ;-)"
        : 
        <span className="flex justify-center mt-4">
          <Image src="/img/QRCode.jpg" width={200} alt="QR Kod pro případný příspěvek" />
        </span>
        }
        </p>
      </div>
    </div>
  );
}
