// sitas App komponentas pasikviecia Mygtuka:
import Mygtukas from './Mygtukas';

//mygtuku data bus ivairi:
const data = ['Spausk', 'Spaudinėk', 'Klikink'];

// ir ta Mygtuka renderina:
function App() {
    return (<> //mygtukui turim perduoti: tekstas

        {data.map((b, i) =>  <Mygtukas key={i} tekstas={b} />)} //šitoj vietoj kažką grąžinam
        // čia 'i', tai indeksas
    
        </>);
    }

export default App;