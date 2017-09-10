import React from 'react';

class Repositories extends React.Component {
  render() {
    const repos = this.props.chocolate;
    const repoItems = repos.map(repo => {
      return (
        <div key={repo.id}>{repo.name}</div>
      )
    });    
    console.log(repoItems);
    return (
      <div>Check your {repoItems} repositories.</div>
    );
  }
}

export default Repositories;