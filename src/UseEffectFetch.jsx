// import React, { useEffect } from 'react'

// function UseEffectFetch() {
//     const [post,setPost]=useState()
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(x=>x.json())
//         // .then(post=>console.log(post)
//         .then(x=>setPost(x.slice(0,10)))},[])
    
//   return (
//     <div>
//       {post.map(x=><h1>post.title</h1>)}
//     </div>
//   )
// }

// export default UseEffectFetch
import React, { useState, useEffect } from 'react';

function UseEffectFetch() {
    const [posts, setPosts] = useState([]); // Initialize with an empty array

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPosts(data.slice(0, 10))); // Fetch the first 10 posts
    }, []);

    return (
        <div>
            {posts.map(post => <h1 key={post.id}>{post.title}</h1>)} {/* Display post titles */}
        </div>
    );
}

export default UseEffectFetch