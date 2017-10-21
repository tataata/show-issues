import React from 'react';

class Issues extends React.Component {
  render() {
    const issues = this.props.tomatos;
    const issueItems = issues.map(issue => {
      return (
        <li key={issue.id}>{issue.title}</li>
      )
    });

    return (
      <div>
        <div>Here is issues in HARDCODEDREPO:</div>
        <ul>
          {issueItems}
        </ul>
      </div>
    );
  }
}

export default Issues;