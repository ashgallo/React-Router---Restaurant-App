import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Form from './Form';

class Menu extends React.Component {
  state = { menus: [], showForm: false }


  componentDidMount() {
    axios.get('/api/menus')
      .then( res => this.setState({ menus: res.data }) )
  }

  show() {
    let { menus } = this.state;
      return (
        <ul>
          { menus.map( p =>
              <li key={p.id}>
                <Link to={`/dishes/${p.id}`}>{p.dish}</Link>
              </li>
            )
          }
        </ul>
      )
  }

  form() {
    return <Form submit={this.submit}/>
  }

  submit = (dish) => {
    let { dishes } = this.state;
    axios.post('/api/dishes', { dish } )
      .then( res => this.setState({ dishes: [{...res.data}, ...dishes], showForm: false }) )
      .catch( e => console.log(e.response.data.errors) )
    }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    }

  render() {
    let { showForm } = this.state;
    return (
      <div>
        <h2>Dishes</h2>
        <button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show' } form</button>
        { showForm ? this.form() : this.show() }
      </div>
    )
  }

}

export default Menu