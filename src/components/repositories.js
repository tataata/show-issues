import React from 'react';
import Issues from './issues';

class Repositories extends React.Component {
  render() {
    const repos = this.props.chocolate;
    const repoItems = repos.map(repo => {
      return (
        <li key={repo.id} className="list-group-item">
          <div className="col">{repo.name} ({repo.open_issues_count})</div>
          <Issues repoName={repo.name} />
        </li>
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