import React from 'react';

class Repositories extends React.Component {
  render() {
    const repos = this.props.chocolate;
    const repoItems = repos.map(repo => {
      return (
        <li key={repo.id}>{repo.name} ({repo.open_issues_count})</li>
      )
    });

    // console.log(repoItems);

    return (
      <div>
        <div>Here is your repos:</div>
        <ul>
          {repoItems}
        </ul>
      </div>
    );
  }
}

export default Repositories;