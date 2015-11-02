import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ArticleList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.data.map((value) => {
          return (
            <li key={value.id}>{value.title}</li>
          );
        })}
      </ul>
    );
  }
}

axios.get('http://jsonplaceholder.typicode.com/posts').then((res) => {
  ReactDOM.render(
    <ArticleList data={res.data}/>,
    document.getElementById('root')
  );
}).catch((error) => {
  console.log(error);
});
