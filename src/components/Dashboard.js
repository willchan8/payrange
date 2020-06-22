import React from 'react';
import { withRouter } from "react-router-dom";
import listItems from '../data/listItems';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      washers: listItems.devices,
      balance: 25,
      currentId: listItems.devices.length
    }
  }

  handleAddWasher = () => {
    this.setState(prevState => ({ currentId: prevState.currentId + 1 }), 
      () => {
        const { washers, currentId } = this.state;
        this.setState({ washers: [...washers, {"id": currentId, "label": `Washer ${currentId}`, "status": "Busy"}]});
      }
    );
  }

  handleRemoveWasher = (id) => {
    const { washers } = this.state;
    const list = [...washers];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ washers: updatedList });
  }
  
  handleAddBalance = () => {
    this.setState(prevState => ({ balance: prevState.balance + 5 }));
  }

  render() {
    const { washers, balance } = this.state;
    return (
      <div className="dashboard">
        <div className="header">
          <div>Select a machine</div>
          <div className="add-item" onClick={this.handleAddWasher}>+</div>
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
              <div className="red-circle" onClick={() => this.handleRemoveWasher(washer.id)}>
                <div>&mdash;</div>
              </div>
            </div>
          )}
        </div>
        <div className="balance-footer">
          <div>Balance: ${balance.toFixed(2)}</div>
          <div className="blue-circle" onClick={this.handleAddBalance}>
            <div>+</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);