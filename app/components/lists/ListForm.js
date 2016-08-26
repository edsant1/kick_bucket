import React from 'react';
import $ from 'jquery';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.addList = this.addList.bind(this);
  }

  addList(e) {
    e.preventDefault();
    let time = this.refs.time;
    $.ajax({
      url: '/lists',
      type: 'POST',
      dataType: 'JSON',
      data: { time: time.value, bucketId: this.props.bucketId }
    }).done( list => {
      this.props.addList(list);
      time.value = null;
    })
  }

  render() {
    return (
      <div className="center">
        <form onSubmit={this.addList}>
          <input placeholder="When is the deadline?" ref="time" />
        </form>
      </div>
    );
  }
}

export default ListForm;
