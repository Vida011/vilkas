import { useRef } from "react";

function App() {
    const counter = useRef(0);
    const [turboCounter, setTurboCounter] = useState(0);

    const clicker = () = {
        counter.current++;
        console.log('kaunteris:', counter.current);
    }
    return(<>
    <div>REF: {counter.current}</div

    </div>

    
    )
}