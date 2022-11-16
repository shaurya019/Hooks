import React , { useState,useEffect } from 'react'

function IntervalCount() {
    const [count,setcount] = useState(0);
    const tick = () => {
        setcount(count+1)
    }
    useEffect(()=>{
        const interval = setInterval(tick,1000)
        // dismounting
        return () =>{
            clearInterval(interval)
        }
    },[count])
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalCount
