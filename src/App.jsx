import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OrderDashboard from './pages/orderdashboard'
import ProductListing from './pages/productlisting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductListing />
    </>
  )
}

export default App
