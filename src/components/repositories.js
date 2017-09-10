import React from 'react';
import { UserCard } from './user_card.js';

class Repositories extends React.Component {
  render() {
    const repos = this.props.chocolate;
    const repoItems = repos.map(repo => {
      return (
        <li key={repo.id}>{repo.name}</li>
      )
    });

    console.log(repoItems);

    return (
      <div>
        <UserCard />
        <div>Here is your repos:</div>
        <ul>
          {repoItems}
        </ul>
      </div>
    );
  }
}

export default Repositories;