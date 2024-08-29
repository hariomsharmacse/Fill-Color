import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("")

  const changeColor = (val) => {
    const colorVal = val.target.value;
    console.log(colorVal)
    setColor(colorVal);
  }

  return (
    <>
     <div className='flex flex-col gap-5 justify-center items-center h-[100vh]'>
      <h1 className='text-3xl'>Color Selector</h1>
      <div style={{backgroundColor: color}} className='border w-[250px] h-[250px]' ></div>
     <input onKeyUp={changeColor} type="text" placeholder='Type any color to fill box' className='p-2 border outline-none text-center' />
     </div>
    </>
  )
}

export default App
