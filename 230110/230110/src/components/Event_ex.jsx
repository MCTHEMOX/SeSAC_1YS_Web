import { useState } from "react"
function App() {
  const [info, setInfo] = useState([
    {name:"코디", email:"codee@gmail.com"}, 
    {name:"윤소희", email:"ysh@gmail.com"}
  ])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div>
      <input type="text" name="name" placeholder="이름" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <button type="button" onClick={()=>{ 
        setInfo(info.concat({name: name, email:email})) 
        setName('')
        setEmail('')
        }}>등록</button>
      {info.map((element, i)=><h2 key={i}>{element.name}: {element.email}</h2>)}
    </div>
  );
}

export default App;