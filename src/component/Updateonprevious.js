import React, {useState} from 'react'

function Updateonprevious() {
    const intial = 0;
    const [count,setcount] = useState(intial);
    const Increaseby5 = () => {
    for(let i=0;i<5;i++){
        setcount(prevCount => prevCount+1)
    }
    }
  return (
    <div>
        Count:{count};
      <button onClick={()=>setcount(intial)}>Reset</button>
      <button onClick={()=>setcount(prevCount => prevCount+1)}>Increase</button>
      <button onClick={()=>setcount(prevCount => prevCount-1)}>decrease</button>
      <button onClick={Increaseby5}>Increaseby5</button>
    </div>
  )
}

export default Updateonprevious
