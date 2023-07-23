import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './about';

const data:string[] = ['a','b','c','d','55']


function App() {
  // const [const , setCount] = useState(0);
  const [state, setState] = useState<string>("test");// import usestate "" = ค่าเริ่มต้น or null
  // state = เก็บค่าใน component ต่างๆ
  // setCount = set ตัวแปร count เพิ่ม ลบ (จำนวน) ใช้แทน const เพราะ เปลี่ยนแปลงได้

  return (
    // Fragment Start (<>)
    <>
      <div className ="main">
        <h1>hello Reacasasadat</h1>
        
        <About data = {data} func={setState} />
        { // paste array (Raw Data) element เดียว
          data.map((item,idx) => (
          <h4 key={idx}> {item}</h4>
          )) // map = ดึงข้อมูลจาก array ทีละตัว , สามารถเขียน js ใน tsx ได้เลย
        }
        <h1>{state}</h1>
         
        <input onChange={(e) => setState(state+e.target.value)} // input box + onchange when typing
         /> 
        
        {/* <button onClick={() => setState("Hello Hi Hi Hell no! State Set!")}>Click Me Dude!</button> */}

        {/* {  // ถ้ามีหลายตัว ให้ใช้ return
          data.map((item,idx) => {
            //ex for return สามารถ process data ก่อน print ได้ !
            const itemProcess = item + '55';
            return <h4 key={idx}> {itemProcess}</h4>
          })
        }

        {  
          data.map((item,idx) => {
            if(item === 'a') return <h1 key="idx">AAA</h1>
            else return <h4 key={idx}> {item}</h4>
          })
        } */}
      </div>
    </> // Fragment End (กรณี 2 component (div , p))
  )
}

export default App
