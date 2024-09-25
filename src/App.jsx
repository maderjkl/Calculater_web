import Screen from './components/screen'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Buttons from './components/Buttons'
import { useState } from 'react'
function App() {
const [text,setText]=useState("")
const Buttonclick=(value)=>{
  console.log(value)
  if(value==="AC"){
    setText(text=>"")
  }
  else if(value==="DELETE"){
    setText(text=>text.substring(0,text.length-1))
  }
  else if(value==="="){
    let res=eval(text)
    setText(text=>res)
  }
  else
  setText(text=>text+value)
}
  return (
    
      <div  className='cal'>
        <Screen text={text}></Screen>
        <div className='button'>
        <Buttons onButtonclick={Buttonclick}
        ></Buttons>
        </div>
    </div>
  )
}

export default App
