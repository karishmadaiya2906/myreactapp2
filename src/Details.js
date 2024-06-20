
import React, { Component } from 'react';
import { DataContext } from '../data/data';


class Details extends Component {
  static contextType = DataContext;

  state = {
    menu: [],
  };

  componentDidMount() {
    const { Menu } = this.context;
    const itemId = this.props.match.params.id; // Get the ID from route parameters
    const item = Menu.find((m) => m._id === itemId);

    if (item) {
      this.setState({ menu: [item] });
    }
  }

  render() {
    const { menu } = this.state;
    const { addCart } = this.context;

    if (menu.length === 0) {
      return <h2>Item not found</h2>;
    }

    return (
      <div>
        {menu.map((item) => (
          <div className="details" key={item._id}>
            <img src={item.image} alt={item.name} />
            <div className="info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <h4>Price: ${item.price}</h4>
              <button onClick={() => addCart(item._id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Details;
