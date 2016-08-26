import React from 'react';
import ItemForm from '../items/ItemForm';
import Item from '../items/Item';
import $ from 'jquery'


class List extends React.Component {
  constructor(props) {
    super(props);
    this.deleteList = this.deleteList.bind(this);
    this.addItem = this.addItem.bind(this);
    this.state = { items: [] }
  }

  componentWillMount() {
    $.ajax({
      url: '/items',
      type: 'GET',
      dataType: 'JSON',
      data: { listId: this.props._id }
    }).done( items => {
      this.setState({ items });
    });
  }

  addItem(item) {
    this.setState({ items: [...this.state.items, item] });
  }

  deleteList() {
    $.ajax({
      url: `/lists/${this.props._id}`,
      type: 'DELETE',
      data: { id: this.props._id }
    }).done( () => {
      //Need to notify parent

    });
  }

  render() {
    let items = this.state.items.map( item => {
      return(<Item key={item._id} {...item} />);
    });
    return (
      <div className="col s12 m2">
        <button onClick={this.deleteList} className="btn">Delete</button>
        <h3 className="center">{this.props.name}</h3>
        <hr />
        <ItemForm addItem={this.addItem} listId={this.props._id} />
        { items }
      </div>
    );
  }
}

export default List;