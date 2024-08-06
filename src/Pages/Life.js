import React, { Component } from 'react';

class Life extends Component {


  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      loading: true,
    };
    this.abortController = new AbortController();
  }
// did  mount
  componentDidMount() {
    this.fetchUserData(this.props.userId);
  }
//update

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.userId !== this.props.userId || nextState.userData !== this.state.userData) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.fetchUserData(this.props.userId);
    }
  }
//  Mount

  componentWillUnmount() {
    if (this.abortController) {
      this.abortController.abort();
    }
  }
// erroe
  fetchUserData(userId) {
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal: this.abortController.signal })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => this.setState({ userData: data, loading: false }))
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Fetch error', error);
          this.setState({ userData: null, loading: false });
        }
      });
  }

  render() {
    const { userData, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!userData) {
      return <div>User not found</div>;
    }

    return (
      <div>
        <h1>{userData.name}</h1>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
      </div>
    );
  }
}

export default Life;
