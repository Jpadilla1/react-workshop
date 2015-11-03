import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Icon from 'react-fa';

let styles = {
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-64px',
    marginLeft: '-64px',
    color: '#444'
  }
};

class ArticleList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false
    }
  }
  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts').then((res) => {
      this.setState({data: res.data})
      this.setState({loading: false});
    }).catch((error) => {
      console.log(error);
    });
  }
  componentWillMount() {
    this.setState({loading: true});
  }
  render() {
    let view = (this.state.loading) ? (
      <div style={styles.loading}>
        <Icon spin name='spinner' size='4x'/>
      </div>
    ) : (
      <ul>
        {this.state.data.map((value) => {
          return (
            <li key={value.id}>{value.title}</li>
          );
        })}
      </ul>
    );
    return view;
  }
}


ReactDOM.render(
  <ArticleList/>,
  document.getElementById('root')
);
