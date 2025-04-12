export type PersonProps = {
  group: string;
  name: string;
  hide: boolean;
  status: string;
  adults: string;
  chQty: number | null;
  chAge: string;
}

export default function Person({ person: p }: { person: PersonProps }) {
  const bgColor = p.status ? '#EEFFEE':"#fff3e6";

  return (<>
    <b>{p.group}</b>
    {!p.hide && p.status!="x" && ((p.adults && Number(p.adults) > 0) || (p.chQty && p.chQty >0)) &&
    <div className="mb-4 bg-green-200" style={{backgroundColor:bgColor}}>
      <p className="my-4 ml-4">{p.name} - {p.adults}{p.chQty && ` + ${p.chQty}` }{p.chAge && ` (věk: ${p.chAge})`}: {['c', 'o', 'v'].includes(p.status) && "obřad"}{['c', 'v'].includes(p.status) && ", odpoledne"}{['v'].includes(p.status) && ", přespání"}{p.status==="" && "zatím nepotvrzeno"}</p>
    </div>
    }
    </>
  );
}
