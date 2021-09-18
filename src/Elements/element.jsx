import person from '../Data/person';
const Element(props) { // index.js propsui savybės patenka čia ir iš paimamos į
    return (
        <div>
            <h1>Hello, Barsukas!</h1>
            <small>{props.name}{props.surname}</small> // ČIA.  
        </div>
    );
    
}

export default Element;