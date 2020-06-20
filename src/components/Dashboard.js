import React, { useState } from 'react';
import listItems from '../data/listItems';

function Dashboard() {
  const [washers] = useState(listItems.devices);

  return (
    <div className="dashboard">
      <div className="header">
        <div>Select a machine</div>
        <div className="add-item">+</div>
      </div>
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
          <div className="circle">
            <div>&mdash;</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
