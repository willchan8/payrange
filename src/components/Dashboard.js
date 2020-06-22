import React, { useState, useEffect, useRef } from 'react';
import listItems from '../data/listItems';

const Dashboard = () => {
  const [washers, setWashers] = useState(listItems.devices);
  const [balance, setBalance] = useState(25);
  const [currentId, setId] = useState(listItems.devices.length)

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setWashers(washers => [...washers, {"id": currentId, "label": `Washer ${currentId}`, "status": "Busy"}])
    }
  }, [currentId])

  const handleAddWasher = () => {
    setId(currentId => currentId + 1);
  }

  const handleRemoveWasher = (id) => {
    const list = [...washers];
    const updatedList = list.filter(item => item.id !== id);
    setWashers(updatedList);
  }
  
  const handleAddBalance = () => {
    setBalance(balance => balance + 5)
  }

  return (
    <div className="dashboard">
      <div className="header">
        <div>Select a machine</div>
        <div className="add-item" onClick={handleAddWasher}>+</div>
      </div>
      <div className="washer-list">
        {washers.map((washer) =>
          <div className="container" key={washer.id}>
            <div className="left-col">
              <div className="washer-id">
                <div>{washer.id}</div>
              </div>
              <div className="text-col">
                <div className="washer-text">{washer.label}</div>
                <div className="available-text">{washer.status}</div>
              </div>
            </div>
            <div className="red-circle" onClick={() => handleRemoveWasher(washer.id)}>
              <div>&mdash;</div>
            </div>
          </div>
        )}
      </div>
      <div className="balance-footer">
        <div>Balance: ${balance.toFixed(2)}</div>
        <div className="blue-circle">
          <div onClick={handleAddBalance}>+</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
