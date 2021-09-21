import Kvadratas from './Kvadratas';



function App() {
    return (<>

        {data.map((b, i) =>  <Kvadratas key={i} bebras={b} />)} //šitoj vietoj kažką grąžinam
        // čia 'i', tai indeksas
    
        </>);
    }

export default App;