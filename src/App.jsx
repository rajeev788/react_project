import { useState } from 'react'



function App() {

const [color,Setcolor]=useState("olive")
  return (
    <div className='w-full h-screen duration-200'
     style={{backgroundColor:color}}>
     <div className='fixed inset-x-0 flex-wrap justify-center px-2 bottom-12 '>
      <div className='fixed flex flex-wrap justify-center gap-2 px-3 py-2 shadow-2xl rounded-xl bg-slate-500'>
        <button onClick={()=>Setcolor('red')} className='px-4 text-white rounded-full shadow-lg outline-none' style={{backgroundColor:'red'}}>
          RED
        </button>
        <button onClick={()=>Setcolor('green')} className='px-4 text-white rounded-full shadow-sm outline-none' style={{backgroundColor:'green'}}>
        Green
        </button>
        <button  onClick={()=>Setcolor('blue')} className='px-4 text-white rounded-full shadow-sm outline-none' style={{backgroundColor:"blue"}}> 
          Blue
        </button>
        <button  onClick={()=>Setcolor('orange')} className='px-4 text-white rounded-full shadow-sm outline-none' style={{backgroundColor:"orange"}}> 
          Orange
        </button>
      </div>

     </div>
    </div>
    
    
  )
}

export default App
