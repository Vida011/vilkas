import Bebras from './Bebras';

function Kvadratas(props) {
    if ('Brigadininkas' == props.bebras) {
        return (
            <div className={Kvadratas}>
            <b><Bebras bebras={props.bebras}/></b> //čia turim Bebro komponentą
            </div>
            );
    }
    
return (
    <div className={Kvadratas}>
        <Bebras bebras={props.bebras}/> //čia turim Bebro komponentą
    </div>
    );
}

export default Kvadratas;