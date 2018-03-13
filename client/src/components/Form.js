import React from 'react';

class Form extends React.Component {
  defaultValues = { dish: '', description: '', price: '' }
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id)
      this.setState({...this.props})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let dish = { ...this.state }
    this.props.submit(dish)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value })
  }

  render() {
    let { dish, description, price } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="dish"
          placeholder="Dish"
          value={dish}
          onChange={this.handleChange}
          required
        />
        <input
          id="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <input
          id="price"
          placeholder="Price"
          type="number"
          value={price}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;