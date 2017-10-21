import React from 'react';

class UsernameForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  submit(event) {
    this.props.onUsernameSubmit(this.state.value);
    event.preventDefault();
    return false;
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.submit.bind(this)} className="col">
          <input type="search" ref="username" className="form-control" placeholder="Type Username"
            value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </form>
      </div>
    );
  }
}

export default UsernameForm;