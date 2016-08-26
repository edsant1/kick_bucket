import React from 'react';
import $ from 'jquery';

class Bucket extends React.Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateBucket = this.updateBucket.bind(this);
    this.deleteBucket = this.deleteBucket.bind(this);
    this.state = { edit: false };
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  updateBucket() {
    let user = this.refs.user.value;
    let title = this.refs.title.value;
    $.ajax({
      url: `/buckets${this.props._id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { user, title }
    }).done( board => {
      this.props.updateBucket(bucket._id, user, title);
      this.toggleEdit();
    });
  }


  deleteBucket() {
    $.ajax({
      url: `/buckets/${this.props._id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( () => {
      this.props.deleteBucket(this.props._id);
    });
  }

  bucket() {
    return (
        <div className="col s12 m3">
          <div className="card blue-grey">
            <div className="card-content white-text">
              <span onClick={this.toggleEdit} className="card-title">{this.props.user}</span>
              <p>{this.props.title || "Click bucket name to add"}</p>
            </div>
            <div className="card-action">
              <button onClick={this.deleteBoard} className="btn"> Delete</button>
              <a href={`/buckets/${this.props._id}`} className="btn">Show</a>
            </div>
          </div>
        </div>
    );
  }

  
  edit() {
    return(
      <div className="col s12 m3">
        <div className="card blue-grey">
          <div className="card-content white-text">
            <input
              required={true}
              ref="name"
              placeholder={this.props.user}
              defaultValue={this.props.user}
            />
            <textarea ref="description">{this.props.title}</textarea>
          </div>
          <div className="card-action">
            <button onClick={this.toggleEdit} className="btn"> Cancel</button>
            <button onClick={this.updateBucket} className="btn">Update </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if ( this.state.edit)
      return this.edit();
    else
      return this.board();
  }

}

export default Bucket;