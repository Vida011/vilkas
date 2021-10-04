import { animals as list } from "../Data/animals"
import { useState } from 'react-router-dom';

function Zoo() {

const [animals, setAnimals] = useState(list);


    return(
        <div className="Zoo">
            {animals.map(animal => <Animal/>)}
            <h1> Welcome to the ZOO </h1>
            </div>
    )
}