import Bebras from "./Bebras";

function Kvadratas(props) {
  if ("Brigadininkas" == props.bebras) {
    return (
      // jeigu grąžina šitą, tai
      <div className="kvadratas br">
        <b>
          <Bebras bebras={props.bebras} />
        </b>{" "}
        //čia turim Bebro komponentą
      </div>
    );
  }

  return (
    // šito jau nebegrąžins
    <div className='kvadratas'>
      <Bebras bebras={props.bebras} /> //čia turim Bebro komponentą
    </div>
  );
}

export default Kvadratas;
