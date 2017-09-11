import React from 'react';

class UserCard extends React.Component {
  render() {
    const userData = this.props.data;

    return (
      <div>
        <img className="user__pic" src={userData.avatar_url} width="60" height="60" />
        <div className="user__name">Hi, {userData.login}</div>
      </div>
    );
  }
}

export default UserCard;