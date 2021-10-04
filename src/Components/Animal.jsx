import { useParams} from "react-router-dom";

function Animal() {
    const{id} = useParams();
    return (
        <h1 style={{fontSize: '123px'}}>{id}</h1>
    )

}

export default Animal;