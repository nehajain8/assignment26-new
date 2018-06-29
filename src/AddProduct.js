import React, { Component } from 'react';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pname:"",
      pdesc:"",
      pprice:0,
      complete: (!!this.props.complete) || false
    };

    //Binding events
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  //Handle form submit event
  onSubmit(event) {
    event.preventDefault();
    const convertedStatus= this.state.complete.toString();
    this.props.onAdd(this.state.pname,this.state.pdesc,this.state.pprice,convertedStatus);
  }

  //handle checkbox change event
  onChangeCheckbox(event){
    const newState=!this.state.complete;
    this.setState({
      complete: newState
    });
  }
  render() {
    return(
      <div className="ProductForm">
        <form className= "productForm" onSubmit={this.onSubmit}>
          <label>Name</label>
          <input type="text" ref={pname => this.pname = pname}  onChange={(e) => this.setState({ pname: e.target.value })}    required/>
          <label>Description</label>
          <input type="text" ref={pdesc => this.pdesc = pdesc} onChange={(e) => this.setState({ pdesc: e.target.value })}  required/>
          <label>Price</label>
          <input type="number" ref={pprice => this.pprice = pprice} onChange={(e) => this.setState({ pprice: e.target.value })}  required/>
          <div className="wrapper">
          <input type="checkbox"  onChange={this.onChangeCheckbox}  defaultChecked={this.state.complete} ref="complete" />
          <label>Availability</label>
          </div>
          <button>Save</button>
        </form>
        <div className="productEntered">
          <p><strong>Product name</strong>: {this.state.pname} </p>
          <p><strong>Product description</strong>: {this.state.pdesc}</p>
          <p><strong>Product price</strong>: {this.state.pprice} </p>
          <p><strong>Product Availability</strong>: {this.state.complete.toString()} </p>
        </div>
      </div>

    )
  }
}

export default AddProduct;
