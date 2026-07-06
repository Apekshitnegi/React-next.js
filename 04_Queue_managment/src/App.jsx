import { useState } from 'react'
import './App.css'
import QueueForm from './components/QueueForm'
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
    <div className="queue-display">
    <h2>Queue Display</h2>
</div>
   </main>
   </div>
  )
}

export default App
