import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            console.log(response.data);

        })
    }, []);



    return (
    <div>
        <div className="posts-container">
        {posts.map((post)=>(<Post key={post.id} data={post} crud={crud}/>))}
        </div>
    </div>);
    }
    
export default App;