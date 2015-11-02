import React from 'react';
import ReactDOM from 'react-dom';
import contacts from './data';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.sendText(this.refs.inputNode.value);
  }
  render() {
    return (
      <input
        ref='inputNode'
        type='text'
        value={this.props.value}
        onChange={this.handleChange} />
    );
  }
}

class ContactListItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name} - {this.props.age}</p>
      </div>
    );
  }
}

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      data: props.contacts,
      filteredData: props.contacts
    };
  }
  filterData = (text) => {
    if (text.toLowerCase().startsWith('name:')) {
      let name = text.toLowerCase().split(':')[1];
      let tmp = this.state.data.filter((value) => {
        return value.name.toLowerCase().startsWith(name);
      });
      this.setState({filter: text, filteredData: tmp});
    } else if (text.toLowerCase().startsWith('age>')) {
      let age = text.toLowerCase().split('>')[1];
      let tmp = this.state.data.filter((value) => {
        return value.age > age;
      });
      this.setState({filter: text, filteredData: tmp});
    } else if (text.toLowerCase().startsWith('age<')) {
      let age = text.toLowerCase().split('<')[1];
      let tmp = this.state.data.filter((value) => {
        return value.age < age;
      });
      this.setState({filter: text, filteredData: tmp});
    } else {
      this.setState({filter: text, filteredData: this.state.data});
    }
  }
  render() {
    return (
      <div>
        <InputBox value={this.state.filter} sendText={this.filterData}/>
        {this.state.filteredData.map((value) => {
          return (
            <ContactListItem key={value.id} name={value.name} age={value.age} />
          );
        })}
      </div>
    );
  }
}

class ContactsApp extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <ContactList contacts={this.props.data}/>
      </div>
    );
  }
}

ReactDOM.render(
  <ContactsApp data={contacts}/>,
  document.getElementById('root')
);
