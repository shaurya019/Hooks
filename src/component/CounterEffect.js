import React , { useState,useEffect } from 'react'

function CounterEffect() {
    const [count,setcount] = useState(0);
    const [name,setname] = useState('');
    // useEffect(()=>{
    //     console.log(`${count}`)
    //     document.title = `Clicked ${count} times`
    // })

    // condition effect 
    useEffect(()=>{
        console.log(`${count}`)
        document.title = `Clicked ${count} times`
    },[count])
    return (
        <div>
       <input type='text'
       value={name}
       onChange={e => setname(e.target.value)} />
              <button onClick={()=>setcount(count+1)}>count {count}</button>
        </div>
    )
    }

export default CounterEffect
