import React from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="search" ref="username" placeholder="Type Username"/>
          <button>Go</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;