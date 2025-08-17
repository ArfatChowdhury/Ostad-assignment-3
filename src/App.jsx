import { useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState('')

  const getValue = (event) => {
    setData(data.concat(event.target.value));

  }
  const calculation = ()=> {

    setData(eval(data).toString())

  }

  const del = () => {
setData(data.slice(0,-1))
  }
const clearAll = () =>{

  setData('')
}


  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-sm w-full'>
        <input 
          type='text' 
          placeholder='0' 
          value={data} 
          className='w-full mb-4 p-4 text-right text-2xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        
        <div className='grid grid-cols-4 gap-2'>
          <button onClick={getValue} value='7' className='bg-gray-200 hover:bg-gray-300 p-4 rounded-lg font-semibold'>7</button>
          <button onClick={getValue} value='8' className='bg-gray-200 hover:bg-gray-300 p-4 rounded-lg font-semibold'>8</button>
          <button onClick={getValue} value='9' className='bg-gray-200 hover:bg-gray-300 p-4 rounded-lg font-semibold'>9</button>
          <button onClick={getValue} value='/' className='bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg font-semibold'>/</button>
          
          <button onClick={getValue} value='4' className='bg-gray-200 hover:bg-gray-300 p-4 rounded-lg font-semibold'>4</button>
          <button onClick={getValue} value='5' className='bg-gray-200 hover:bg-gray-300 p-4 rounded-lg font-semibold'>5</button>
          <button onClick={getValue} value='6' className='bg-gray-200 hover:bg-gray-300 p-4 rounded-lg font-semibold'>6</button>
          <button onClick={getValue} value='*' className='bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg font-semibold'>*</button>
          
          <button onClick={getValue} value='1' className='bg-gray-200 hover:bg-gray-300 p-4 rounded-lg font-semibold'>1</button>
          <button onClick={getValue} value='2' className='bg-gray-200 hover:bg-gray-300 p-4 rounded-lg font-semibold'>2</button>
          <button onClick={getValue} value='3' className='bg-gray-200 hover:bg-gray-300 p-4 rounded-lg font-semibold'>3</button>
          <button onClick={getValue} value='-' className='bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg font-semibold'>-</button>
          
          <button onClick={getValue} value='0' className='bg-gray-200 hover:bg-gray-300 p-4 rounded-lg font-semibold col-span-2'>0</button>
          <button onClick={getValue} value='.' className='bg-gray-200 hover:bg-gray-300 p-4 rounded-lg font-semibold'>.</button>
          <button onClick={getValue} value='+' className='bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg font-semibold'>+</button>
        </div>
        
        <div className='grid grid-cols-4 gap-2 mt-2'>
          <button onClick={getValue} value='(' className='bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg font-semibold'>(</button>
          <button onClick={getValue} value=')' className='bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg font-semibold'>)</button>
          <button onClick={del} value='C' className='bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg font-semibold'>C</button>
          <button onClick={calculation} value='=' className='bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg font-semibold'>=</button>
        </div>
        
        <button onClick={clearAll} value='AC' className='w-full mt-2 bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg font-semibold'>AC</button>
      </div>
    </div>
  )
}

export default App