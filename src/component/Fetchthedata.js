import React , { useState,useEffect } from 'react'
import axios from 'axios'

function Fetchthedata() {
    const[post,setpost] = useState({});
    const[id,setid] = useState(1);
    const[butid,butsetid] = useState(1);
    const handleClick = () =>{
        butsetid(id);
    }
   useEffect(()=>{
axios 
.get(`https://jsonplaceholder.typicode.com/posts/${butid}`)
.then(res=>{
    setpost(res.data)
})
.catch(err=>{
    console.log(err)
})
   },[butid])
  return (
    <div>
        <input type="text" value={id} onChange={e=>setid(e.target.value)} />
        <button type="button" onClick={handleClick}>Fetch data</button>
        <div>{post.title}</div>
      {/* <ul>
          {
             posts.map(post => (
                 <li key={posts.id} >{posts.title}</li>
             )) 
          }
      </ul> */}
    </div>
  )
}

export default Fetchthedata
