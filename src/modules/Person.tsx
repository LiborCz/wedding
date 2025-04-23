export type PersonProps = {
  group: string;
  name: string;
  hide: boolean;
  status: string;
  adults: number | null;
  chQty: number | null;
  chAge: string;
}

export default function Person({ person: p }: { person: PersonProps }) {
  let bgColor = null

  switch(p.status) {
    case "": bgColor = "##ffffe6"; break;
    case "x": bgColor = "#fff3e6"; break;
    default: bgColor = "#EEFFEE"; break;
  }

  return (<>
    <b>{p.group}</b>
    {!p.hide && ((p.adults && Number(p.adults) > 0) || (p.chQty && p.chQty >0)) &&
    <div className="mb-4 bg-green-200" style={{backgroundColor:bgColor}}>
      <p className="my-4 ml-4">{p.name} - {p.adults}{p.chQty && ` + ${p.chQty}` }{p.chAge && ` (věk: ${p.chAge})`}: {['c', 'o', 'v'].includes(p.status) && "obřad"}{['c', 'v'].includes(p.status) && ", odpoledne"}{['v'].includes(p.status) && ", přespání"}{p.status==="" && "zatím nepotvrzeno"}{p.status==="x" && "bohužel nedorazí"}</p>
    </div>
    }
    </>
  );
}
