import React , { useState,useEffect } from 'react'

function Hookmouse() {
    const [x,setx] = useState(0);
    const [y,sety] = useState(0);
   
    const logMousePosition = e =>{
        setx(e.clientX)
        sety(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect')
      window.addEventListener('mouse',logMousePosition)
    },[])

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default Hookmouse
