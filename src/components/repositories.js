import React from 'react';
import Issues from './issues';

class Repositories extends React.Component {
  render() {
    const repos = this.props.chocolate;
    // const repoOwner =


    const repoItems = repos.map(repo => {
      return (
        <li key={repo.id} className="list-group-item">
          <div className="col">{repo.name} ({repo.open_issues_count}) {repo.owner.login}</div>
          <Issues repoOwner={repo.owner.login} repoName={repo.name} />
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