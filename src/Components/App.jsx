import Component from './Component';
import Stalas from './Stalas';
import App3 from './App3';
import M3 from './M3';

function App(props) {
return (<>
    <Component per={props.per} name={'Labas'} surname={'Antanai'}></Component>
    <Stalas per={props.per} name={'Labas'} surname={'Antanai'}></Stalas>
    <App3></App3>
    <M3 per={11}></M3>
    
    </>);
}

export default App;