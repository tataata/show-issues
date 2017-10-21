import React from 'react';

class UserCard extends React.Component {
  render() {
    const userData = this.props.data;

    return (
      <div className="col">
        <div className="card">
          <img className="card-img-top" src={userData.avatar_url} width="60" height="60" />
          <div className="card-block">
            <h4 className="card-text">Hi, {userData.login}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;