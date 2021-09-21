// sitas App komponentas pasikviecia Mygtuka:
import Mygtukas from './Mygtukas';

//mygtuku data bus ivairi:
const data = [['Spausk',1], ['Spaudinėk', 10], ['Klikink', 100]];

// ir ta Mygtuka renderina:
function App() {
    return (<> //mygtukui turim perduoti: tekstas

        {data.map((b, i) =>  <Mygtukas key={i} tekstas={b[0]} amount={b[1]} />)} //šitoj vietoj kažką grąžinam
        // čia 'i', tai indeksas
    
        </>);
    }

export default App;