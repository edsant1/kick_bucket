import React from 'react';
import $ from 'jquery';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    $.ajax({
      url: '/items',
      type: 'POST',
      dataType: 'JSON',
      data: {
        name: this.refs.name.value,
        description: this.refs.description.value,
        listId: this.props.listId
      }
    }).done( item => {
      this.props.addItem(item);
      this.refs.form.reset();
    })
  }

  render() {
    return (
      <div className="center">
        <form onSubmit={this.addItem} ref="form">
          <input placeholder="name" ref="name" />
          <textarea ref="description"></textarea>
          <button className="btn" type="submit">Add Item</button>
        </form>
      </div>
    )
  }
}

export default ItemForm;