import Bebras from "./Bebras";

function Kvadratas(props) {
  if ("Brigadininkas" == props.bebras) {
    return (
      // jeigu grąžina šitą, tai
      <div className="kvadratas br">
        <b>
          <Bebras bebras={props.bebras} />
        </b>{" "}
       
      </div>
    );
  }

  return (
    // šito jau nebegrąžins
    <div className='kvadratas'>
      <Bebras bebras={props.bebras} /> 
    </div>
  );
}

export default Kvadratas;
