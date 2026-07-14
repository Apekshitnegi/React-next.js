import React from 'react'

function QueueDisplay() {
  const getStatusColor = (status) =>{
    switch (status) {
      case value "waiting":
        return " var(--warning)";
      case value "serving":
        return " var(--Success)";
      case value "completed":
        return " var(--info)";
    
      default:
        return "var(--text)"
      
    }
  }
  return (
    <div>
      QueueDisplay
    </div>
  )
}

export default QueueDisplay
