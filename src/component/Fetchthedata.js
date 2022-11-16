import React , { useState,useEffect } from 'react'
import axios from 'axios'

function Fetchthedata() {
    const[post,setpost] = useState({});
    const[id,setid] = useState(1);
   useEffect(()=>{
axios 
.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(res=>{
    setpost(res.data)
})
.catch(err=>{
    console.log(err)
})
   })
  return (
    <div>
        <input type="text" value={id} onChange={e=>setid(e.target.value)} />
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
