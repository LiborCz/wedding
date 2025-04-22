import input from '../config/Svatba.json';
import Person, { PersonProps } from './Person';

let group = "";
let lastGroup = "";

const people: PersonProps[] = input.map(p => {
  group = p.Group?p.Group:group;
  
  return ({
  group: group,
  name: p.Celkem,
  hide: p.H=="x",
  status: p.S,
  adults: p. Dospeli,
  chQty: p.Deti,
  chAge: p.Age,
})});

export default function InfoPeople() {


  return (
    <>
      {people.map((p: PersonProps, i) => {
        if(p.group===lastGroup && p.group!="In Question") {
          p.group="";
        }
        else lastGroup = p.group;
        return i!==0 && p.group!="In Question" && p.group!="Rodina" && <Person key={i} person={p} />})
      }
    </>
  );
}
