import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootswatch/dist/quartz/bootstrap.min.css'
import Navegador from './components/Navegador'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navegador />
    </>
  )
}

export default App
