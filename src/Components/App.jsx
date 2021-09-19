import Kvadratas from './Kvadratas';

const data = ['Rudasis', 'Juodasis', 'Brigadininkas'];

function App() {
    return (<>

        {data.map((b, i) =>  <Kvadratas key={i} bebras={b} />)} //šitoj vietoj kažką grąžinam
        // čia i, tai indeksas
      
   
        </>);
    }
    
export default App;