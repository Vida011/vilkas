import React, {setState} from 'react';
import SmallAnimal from './SmallAnimal';
import getId from '../Shared/id';
function App() {

    // constructor() { //state yra pasetinti ir konstr.nereikalingas
    //     super();
    //     this.state = {
    //         animals: [],
    //         cowInput: ''
    //         };
    // } //state perkėlėm į hook'us

    const [animals, setAnimals] = setState([]);
    const [cowinput, setCowInput] = setState('');

    const addAnimal = (a) => {
        const animal = {id: getId(), color: cowInput, animal: a};
        const animalsCopy = animals.slice();
        animalsCopy.push(animal);
        setAnimals(animalsCopy);
        // localStorage.setItem('allAnimals', JSON.stringify(animals));
    }

    const deleteAnimal = (id) => {
        const animalsCopy = animals.slice();
        for (let i=0; i<animals.length; i++) {
            if (animals[i].id == id) {
                animals.splice(i, 1);
                break;
            }
        }
        this.setState({
            animals: animals
        });
        localStorage.setItem('allAnimals', JSON.stringify(animals));
    }

    editAnimal = (id, color) => {
        const animals = this.state.animals.slice();
        for (let i=0; i<animals.length; i++) {
            if (animals[i].id == id) {
                animals[i].color = color;
                break;
            }
        }
        this.setState({
            animals: animals
        });
        localStorage.setItem('allAnimals', JSON.stringify(animals));
    }

    cowInputHandler = (e) => {
        this.setState({
            cowInput: e.target.value,
        });
    }

    // componentDidMount() {
    //     const animals = JSON.parse(localStorage.getItem('allAnimals'));
    //     if (null === animals) {
    //         return;
    //     }
    //     this.setState({
    //         animals: animals
    //     })
    // } // reiks vidaus



        return (
            <>
                {this.state.animals.map(b => <SmallAnimal key={b.id} delete={deleteAnimal} edit={this.editAnimal} id={b.id} color={b.color} animal={b.animal} />)}
                <div>
                    <input type="text" value={this.state.cowInput} onChange={this.cowInputHandler}/>
                    <button className="input-button" onClick={()=>addAnimal('cow')}>Add Cow</button>
                    <button className="input-button" onClick={()=>addAnimal('sheep')}>Add Sheep</button>
                </div>
            </>
        );
    }
 
export default App;