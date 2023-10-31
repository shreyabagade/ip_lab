import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    // Simulate an asynchronous API call using a Promise
    this.fetchData()
      .then((data) => {
        this.setState({ data, loading: false });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }

  fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate an API request that takes some time to complete
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue < 0.5) {
          resolve(`Data fetched successfully: ${randomValue}`);
        } else {
          reject('Failed to fetch data');
        }
      }, 2000);
    });
  }

  render() {
    const { data, loading, error } = this.state;

    return (
      <div>
        <h1>Asynchronous Programming with Promises</h1>
        {loading && <p>Loading...</p>}
        {data && <p>Data: {data}</p>}
        {error && <p>Error: {error}</p>}
      </div>
    );
  }
}


export default App;
