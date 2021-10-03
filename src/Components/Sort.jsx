import { useState } from "react";

function Sort(props) {
  //reikia padaryti, kad kažkas valdytų:
  const [select, setSelect] = useState("titleAsc");

  const doSelect = (e) => {
    setSelect(e.target.value); //kontroliuojamas komponentas
    props.makeSort(e.target.value); //gaunam iš propsų ir išsiunčiam naują reikšmę pagal ką rūšiuoti turim
  };
  return (
    <div className="sorter">
      <select onChange={doSelect}>
        <option value="titleAsc">Pagal pavadinimą</option>
        <option value="titleDesc">Pagal pavadinimą atvirkščiai</option>
        <option value="priceAsc">Pagal kainą</option>
        <option value="priceDesc">Pagal kainą atvirkščiai</option>
      </select>
    </div>
  );
}

export default Sort;
