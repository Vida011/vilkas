import Kvadratas from './Kvadratas';
// import test from './nd1/img/01.jpg'

import trains from './nd1/data';

const data = ['Rudasis', 'Juodasis', 'Brigadininkas'];

function App() {
    return (<>

        {data.map((b, i) =>  <Kvadratas key={i} bebras={b} />)} //šitoj vietoj kažką grąžinam
        // čia i, tai indeksas
      
   
        </>);
    }

function Traukiniai() {
    return (<>
    {trains.map((values, index) =><img key={index} src={values.img} alt='img'/>)}
</>);  
}
    
export default App;
export{Traukiniai}

