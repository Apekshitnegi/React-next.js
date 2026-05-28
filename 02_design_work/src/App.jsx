import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Header from './Components/Header'
import Hero from './Components/Hero'

function App() {

  return (
    <>
    <Hero/>
    <Header/>
      <h1 className="text-blue-600 text-3xl font-bold">
        Let's goo
      </h1>
    
      <div className='flex gap-3.5'>
        <Card title = "Green Tea" buttonText = "Buy-Now" imageUrl="https://images.pexels.com/photos/36183149/pexels-photo-36183149.jpeg"/>
        <Card title = "Chai" buttonText = "Buy-Now" imageUrl="https://images.pexels.com/photos/4974553/pexels-photo-4974553.jpeg" />
        <Card title = "Hot Coffee" buttonText = "Buy-Now" imageUrl="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg"/>
        
      </div>

    </>
  )
}

export default App;