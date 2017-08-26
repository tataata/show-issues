import React from 'react';
import ReactDOM from 'react-dom';

// Components
import LoginForm from './components/login_form.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      issues: [],
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/tataata/tataata.com/issues?state=open')
      .then((res) => res.json() )
      .then((data) => {
        this.setState({ 
          loading: false,
          issues: data,
        });
      });
  }

  render() {
    return this.state.loading
      ? <div className="loading">loading ...</div>
      : <div>We have a bunch of issues:  {this.state.issues.length}</div>;
  }
}

ReactDOM.render(
  <div>
    HELLO
    <LoginForm />
    <App />
  </div>,
  document.querySelector('#container')
);
