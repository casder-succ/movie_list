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
      const movies = await fetch('./assets/data.json');
      const moviesJson = await movies.json();
      
      if (moviesJson) {
        this.setState({
          data: moviesJson,
          loading: false,
        });
      }
    } catch(error) {
      console.error(error);
      this.setState({
        loading: false,
        isError: true,
      });
    }
  }

  render() {
    const {data, loading, isError} = this.state;

    if (isError) return <h1>Oh... there is some error :(</h1>;

    if (loading) return <h1>Loading data...</h1>;

    return (
      <div>
        <h1>Movies</h1>
        {data.map((movie) => <Card key={movie.id} movie={movie} />)}
      </div>
    );
  }
};

export default List;
