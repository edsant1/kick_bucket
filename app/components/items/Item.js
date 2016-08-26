import React from 'react';

class Item extends React.Component {
  render() {
    return(
      <div className="col s12">
        <div className="card blue-grey">
          <div className="card-content white-text">
            <span className="card-title">{this.props.name}</span>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    )
  }
}