import React, { useState } from 'react';
import listItems from '../data/listItems';

function Dashboard() {
  const [washers, setWashers] = useState(listItems.devices);
  const [balance, setBalance] = useState(30);

  return (
    <div className="dashboard">
      <div className="header">
        <div>Select a machine</div>
        <div className="add-item">+</div>
      </div>
      <div className="washer-list">
        {washers.map((washer) =>
          <div className="container">
            <div className="left-col">
              <div className="washer-id">
                <div>{washer.id}</div>
              </div>
              <div className="text-col">
                <div className="washer-text">{washer.label}</div>
                <div className="available-text">{washer.status}</div>
              </div>
            </div>
            <div className="red-circle">
              <div>&mdash;</div>
            </div>
          </div>
        )}
      </div>
      <div className="balance-footer">
        <div>Balance: ${balance.toFixed(2)}</div>
        <div className="blue-circle">
          <div>+</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
