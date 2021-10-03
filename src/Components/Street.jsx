import { useParams } from 'react-router-dom';

function Street () {

    const { street } = useParams();// kintamasis street turi sutapti su kint.pagal dvitaski(:street)

    return(
        <h1>Street {street}</h1>
    )
}

export default Street;