import { useState, useEffect } from 'react'
import './App.css'
import Bar from './components/Bar'

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((value) => value + 1);
    }, 100)
  }, [])

  return (
    <>      
    <div className="p-4 flex flex-col items-center">
      <span className="flex justify-center text-xl font-bold mb-4 text-[#e5e5e5] mt-[5rem]">PROGRESS BAR</span>
      <Bar value={value}/>
    </div>
    </>
  )
}

export default App


// flex justify-center 