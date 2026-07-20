import React from "react";

function QueueDisplay({ queue, onUpdateStatus, onRemoveStatus }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "var(--warning)";

      case "serving":
        return "var(--success)";

      case "completed":
        return "var(--info)";

      default:
        return "var(--text)";
    }
  };

  return (
    <div className="queue-display">
      <h2>Queue Display</h2>

      {queue.length === 0 ? (
        <p className="empty-queue">No customer data</p>
      ) : (
        <div className="queue-list">
          {
            queue.map((customer) =>(
              <div className="queue-item" key={customer.id}>
                <div className="customer-info">
                  <h3>{customer.name}</h3>
                  <p>{customer.service}</p>
                  <span className="status">
                    style={{ color: getStatusColor(customer.status)}}

                  </span>
                </div>
              </div>
            )) }
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;