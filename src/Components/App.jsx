import React, {useState, useEffect,} from 'react';
import axios from 'axios';
import Knyga from './Knyga';
import Sort from './Sort';

function App() {

    const [books, setbooks] = useState;

    useEffect (()=> {
        console.log('Start');
        axios.get('https://in3.dev/knygos/')
        .then(function (response) {
            console.log(response.data);
            const book = response.data;
            books.sort((a, b)=> {
                if (a.title > b.title) {
                    return 1;
                }
                else if(a.title < b.title) {
                    return -1;
                }
                else {
                    return 0;
                }

            })
            setBooks(books);
        })
    
    }, []);

    const makeSort = (dir) => {
        console.log(dir); // pasitikrinam ar tikrai gaunam
        const booksCopy = books.slice();
        if(dir === 'priceDesc') {
            booksCopy.sort((a, b)) => a.price-b.price);
            setBooks(bookCopy)

    }
}
    return (
        <div>
        <Sort makeSort={makeSort}></Sort>
        <div className="books-container">
        {books.map((book)=>(<Knyga key ={book.id} data={book}></Knyga>))}
        </div>
        </div>);
    }

export default App;
