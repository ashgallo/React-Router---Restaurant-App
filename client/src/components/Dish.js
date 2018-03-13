import React from 'react';
import axios from 'axios';
import Form from './Form';

class Dish extends React.Component {
  state = { Dish: {}, edit: false }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.params.id}`)
      .then( res => this.setState({ dish: res.data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit }
    });
  }

  submit = (dish) => {
    axios.put(`/api/dishes/${this.props.match.params.id}`, { dish })
      .then( res => this.setState({ dish: res.data, edit: false }) );
  }

  show() {
    let { dish: { dish, description, price }} = this.state;
    return (
      <div>
        <h1>{dish}</h1>
        <h3>{description}</h3>
        <h3>${price}</h3>
      </div>
    )
  }

  edit() {
    return <Form {...this.state.dish} submit={this.submit} />
  }

  render() {
    let { edit } = this.state;
    return (
      <div>
        { edit ? this.edit() : this.show() }
        <button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit' }</button>
      </div>
    )
  }
}

export default Dish;