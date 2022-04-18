import React from 'react';
import Card from './../components/card/Card';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      isError: false,
    };
  }

  async componentDidMount() {
    try {
      const movies = await fetch('./../assets/data.json');
      const moviesJson = await movies.json();
      
      if (moviesJson) {
        this.setState({
          data: moviesJson,
          loading: false,
        });
      }
    } catch(error) {
      this.setState({
        loading: false,
        isError: true,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Card />
      </div>
    );
  }
};

export default List;
