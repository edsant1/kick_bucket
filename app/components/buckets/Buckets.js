import React from 'react';
import $ from 'jquery';
import Bucket from './Bucket';
import BucketForm from './BucketForm';

class Buckets extends React.Component {
  constructor(props) {
    super(props);
    this.addBucket = this.addBucket.bind(this);
    this.deleteBucket = this.deleteBucket.bind(this);
    this.updateBucket = this.updateBucket.bind(this);
    this.state = { buckets: [] };
  }

  componentWillMount() {
    $.ajax({
      url: '/buckets',
      type: 'GET',
      dataType: 'JSON'
    }).done( buckets => {
      this.setState({ buckets });
    });
  }


  deleteBucket(id) {
    this.setState({ buckets: this.state.buckets.filter( bucket => bucket._id !== id) 
    })
  }

  updateBucket(id, name, description) {
    let buckets = this.state.buckets.map( buckets => {
      if (bucket._id === id){
        return{
          ...bucket,
          description, name
        }
      }

      return bucket;
    });

    this.setState({ buckets });
  }

  addBucket(bucket) {
    this.setState({ buckets: [...this.state.buckets, bucket] });

  }

  render() {
    let buckets = this.state.buckets.map( bucket => {
      return(
        <Bucket
          key={bucket._id}
          {...bucket}
          deleteBucket={this.deleteBucket}
          updateBucket={this.updateBucket}
        />
      );
    });
    return (
      <div>
        <BoardForm addBucket={this.addBucket} />
        <div className="row">
          { buckets }
        </div>
      </div>
    );
  }
}

export default Buckets;