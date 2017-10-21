import React from 'react';

class Repositories extends React.Component {
  render() {
    const repos = this.props.chocolate;
    const repoItems = repos.map(repo => {
      return (
        <li key={repo.id} className="list-group-item">{repo.name} ({repo.open_issues_count})</li>
      )
    });

    // console.log(repoItems);

    return (
      <div className="row">
        <div className="col">
          <p>Here is your repos:</p>
          <ul className="list-group">
            {repoItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default Repositories;