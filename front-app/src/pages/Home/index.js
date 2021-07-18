import React, { Component } from 'react';
import * as api from '../../services/fetchAPI';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };

  }

  async componentDidMount() {
    const result = await api.getBooks();
    this.setState({ books: result });
  }

  render() {
    return (
      <h1>Initial</h1>
    );
  };
};

export default Home;
