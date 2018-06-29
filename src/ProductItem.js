import React, { Component,Fragment } from 'react';

//Product item class
class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete() {
    const {onDelete, name} = this.props;
    onDelete(name);
  }
  render() {
    const {name, desc,price,status,onDelete} = this.props;
    return(
      <Fragment>
      <tr className="ProductItemContainer" onClick={this.onDelete}>
      <td>{name}</td>
      <td>{desc}</td>
      <td>Product price</td>
      <td>{status}</td>
      </tr>
      </Fragment>
    )
  }
}

export default ProductItem;
