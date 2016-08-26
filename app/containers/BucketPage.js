import React from 'react';
import Lists from '../components/lists/Lists';

class BucketPage extends React.Component {
  render() {
    return (
      <div>
        <Lists boardId={this.props.id} />
      </div>
    )
  }
}

export default BucketPage;