import React from 'react';
import $ from 'jquery';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.addBucket = this.addBucket.bind(this);
  }

  addBucket(e){
    e.preventDefault();
    let user = this.refs.user
    let title = this.refs.title
    $.ajax({
      url: '/buckets',
      type: 'POST',
      dataType: 'JSON',
      data: { user: user.value, title: title.value }
    }).done( bucket => {
      this.props.addBucket(bucket);
      user.value = null;
      title.value = null;
    })
  }

  render() {
    return (
      <div className="center">
        <form onSubmit={this.addBucket} >
          <input placeholder="user" ref="user" />
          <input placehlder="title" ref="title" />
        </form>
      </div>
    );
  }
}

export default BucketForm;