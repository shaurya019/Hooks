import React ,{useState} from 'react'

function Hookinarray() {
    const [items,setitem] = useState([]);
    const additems = () => {
        setitem([...items,{
            key : items.length,
            value : Math.floor(Math.random()*10)+1
        }])  
    }
  return (
    <div>
      <button onClick={additems}>ADD AN ITEM</button>
      <ul>
          {items.map(item=>(
              <li key={item.key}>{item.value}</li>
          ))}
      </ul>
    </div>
  )
}

export default Hookinarray
