import { useState } from 'react'
import Header from './components/layout/header/header'
import Navbar from './components/layout/navbar/navbar'
import Display from './components/layout/display/display'
import Card from './components/main/products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Display/>
      <Card data={data}/>
    </>
  )
}

export default App
