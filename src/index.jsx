import React from 'react';
import ReactDOM from 'react-dom';

// Components
import UsernameForm from './components/username_form';
import UserCard from './components/user_card';
import Repositories from './components/repositories';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      username: null,
      repositories: null,
      selectedRepository: null,
      issues: null,
    };

  }

  // componentDidMount() {
  //    // fetch open issues
  //   fetch('https://api.github.com/repos/tataata/tataata.com/issues?state=open')
  //     .then((res) => res.json() )
  //     .then((data) => {
  //       this.setState({
  //         loading: false,
  //         issues: data,
  //       });
  //     });
  // }

  usernameSubmitted(username) {
    this.setState({
      username,
      //loading: true,
    });

    // Fetch profile info
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          username: data,
        });
      });

    // Fetch list of repos
    fetch(`https://api.github.com/users/${username}/repos?type=all`)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          repositories: data,
        });
      });
  }

  render() {
    if (this.state.loading)
      return <div className="loading">loading ...</div>;
    else if (this.state.username === null)
      return <UsernameForm onUsernameSubmit={this.usernameSubmitted.bind(this)}/>;
    else if (this.state.repositories !== null)
      return (
        <div>
          <UserCard data={this.state.username} />
          <Repositories chocolate={this.state.repositories} />
        </div>
      )
    else
      return null; // default scenario
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#container')
);