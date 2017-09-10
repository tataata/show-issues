import React from 'react';

class Issues extends React.Component {
  render() {
    return (
      <div>We have a bunch of issues: {this.state.issues.length}</div>
    )
  }
}

export default Issues;