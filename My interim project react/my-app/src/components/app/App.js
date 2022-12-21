
import './App.css';
import { Component } from 'react';
import Person from '../person/person';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {id:1230, name: 'Nadezda', phone: '89211840076', career: 'IT', email: 'petrovan@Gmail.com', meeting: '20.12 - 12:00'},
        {id:1231, name: 'Mark', phone: '89211844656', career: 'Banking', email: 'mark@Gmail.com', meeting: ''},
        {id:1232, name: 'Dave', phone: '89211847411', career: 'HR', email: 'dave@Gmail.com', meeting: '22.12 - 12:30'},
        {id:1233, name: 'Daniel', phone: '89211815256', career: 'Real Estate', email: 'daniel@Gmail.com', meeting: ''},
        {id:1234, name: 'Daniel', phone: '89211815256', career: 'Real Estate', email: 'daniel@Gmail.com', meeting: ''},
        {id:1235, name: '', phone: '', career: '', email: '', meeting: ''},
        {id:1236, name: '', phone: '', career: '', email: '', meeting: ''},
        {id:1237, name: '', phone: '', career: '', email: '', meeting: ''},
        {id:1238, name: '', phone: '', career: '', email: '', meeting: ''},
        {id:1239, name: '', phone: '', career: '', email: '', meeting: ''},
      ]
    }
  }

onValueChange = (id, value) => {
this.setState(({data}) =>{
  const item = data.find(item => item.id === id)
  const newItem = {...item, meeting: value, name: value, phone: value, career: value, email: value}
  const index = data.indexOf(item)
  const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1, data.length)]
  return {
    data: newData
  }
})
}

  render() {
    const {data} = this.state;
    const personList = data.map(item => {
      return <Person {...item} key={item.id} onValueChange={(id, value) => this.onValueChange(id, value)}/>
    })
    return (
      <table className='responsive-table'>
          <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Career</th>
                <th>Email</th>
                <th>Meeting</th>
            </tr>
          </thead>
          <tbody>
            {personList}
          </tbody>
        </table>
    );
  }
}

export default App;
