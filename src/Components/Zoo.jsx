import { animals as list } from "../Data/animals"
import { useState } from 'react';
import AnimalLink from './AnimalLink';
import Animal from './Animal';
import { Route } from "react-router";

function Zoo() {

const [animals, setAnimals] = useState(list); //visi animals nuskaityti į state'ą


    return( // returnins state'a
        <div className="Zoo">
             <h1> Welcome to the ZOO </h1>
             <Swtch>
                 <Route path={'/:id'}>
                    <Animal></Animal>
                 </Route>
                 <Route path={'/'}>
            <ul>
            {animals.map(animal => <AnimalLink key={animal.id} animal={animal}/>) } //Animal yra komp.
           </ul>
                </Route>
           </Swtch>

            </div>
    )
}

export default Zoo;