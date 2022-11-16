import React , { useState,useEffect } from 'react'

function CounterEffect() {
    const [count,setcount] = useState(0);
    useEffect(()=>{
        document.title = `Clicked ${count} times`
    })
    return (
        <div>
              <button onClick={()=>setcount(count+1)}>count {count}</button>
        </div>
    )
    }

export default CounterEffect
