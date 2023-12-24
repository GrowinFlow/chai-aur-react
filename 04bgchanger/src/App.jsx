import { useState } from 'react'

function App() {
  const [color, setColor] = useState("yellowgreen")

  return (
    <>
<div className='w-full h-screen duration-200'
style={{backgroundColor:color}}
>

<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
  
<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-4 rounded-xl'>

  <button
  onClick={()=> setColor("red")}
   className='outline-none px-4 py-3 font-semibold text-white rounded-3xl shadow-md shadow-slate-400'
  style={{backgroundColor: "red"}}>Dark Red</button>

  <button
  onClick={()=> setColor("green")}
  className='outline-none px-4 py-3 font-semibold text-white rounded-3xl shadow-md shadow-slate-400'
  style={{backgroundColor: "green"}}>Dark Green</button>

  <button
  onClick={()=> setColor("yellowgreen")}
  className='outline-none px-4 py-3 font-semibold text-white rounded-3xl shadow-md shadow-slate-400'
  style={{backgroundColor: "yellowgreen"}}>Yellow Green</button>

  <button
  onClick={()=> setColor("#edd468")}
  className='outline-none px-4 py-3 font-semibold text-white rounded-3xl shadow-md shadow-slate-400'
  style={{backgroundColor: "#edd468"}}>Light Yellow</button>

</div>
</div>
</div>
    </>
  )
}

export default App
