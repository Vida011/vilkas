import React, {useState, useEffect,} from 'react';
import axios from 'axios';
import Knyga from './Knyga';

function App() {

    const [books, setbooks] = useState;

    useEffect (()=> {
        console.log('Start');
        axios.get('https://in3.dev/knygos/')
        .then(function (response) {
            console.log(response.data);
            setBooks(response.data);
        })
    
    }, []);

    return (<div className="books-container">
        {books.map((book)=>(<Knyga key = {book.id} data={book}></Knyga>))}
     
        </div>);
    }

export default App;
