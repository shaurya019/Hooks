import React,{useState} from 'react'

function Hookcounterthree() {
    const [name,setname] = useState({firstname:'',Secondname:''});
  return (
   <form>
       <input type='text'
       value={name.firstname}
       onChange={e=> setname({...name,firstname:e.target.value})} />
       <input type='text'
       value={name.Secondname}
       onChange={e=> setname({...name,Secondname:e.target.value})} />
          <h2>Your firstname is- {name.firstname}</h2>
       <h2>Your Secondname is- {name.Secondname}</h2>
   </form>
  )
}

export default Hookcounterthree
