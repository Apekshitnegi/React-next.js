import { useState } from 'react'
import './App.css'
import QueueForm from './components/QueueForm'
import QueueDisplay from './components/QueueDisplay'
function App() {
  const [Queue , setQueue] = useState([])
 
  const addToQueueData  = (customer) => {
    setQueue([...Queue, {...Customer , id : Date.now , status: "Waiting"}])
  }

  const updateStatus  = (id , newStatus) => {
       setQueue(Queue.map(Customer =>{
        Customer.id ? {...Customer , status : newStatus}:Customer
       }))
  }

  const removeFromQueue  = (id) => {
    setQueue(Queue.filter(Customer => Customer.id !== id) 
    
    )
  }
  return (
    <div className= "app">
   <header>
   
      <h1> Queue Managment Application </h1>
      <p>manage your customers efficiently</p>

   </header>

   <main>
   <QueueForm onAdd={addToQueueData} />
    <QueueDisplay/>
   </main>
   </div>
  )
}

export default App
