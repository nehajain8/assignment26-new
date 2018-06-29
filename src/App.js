import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddProduct from './AddProduct.js';
import ProductItem from './ProductItem.js';
import ErrorBoundary from './ErrorBoundary'
const products = [

];

localStorage.setItem('products' ,JSON.stringify(products));
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      products:JSON.parse(localStorage.getItem('products'))
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  componentWillMount(){
    const products=this.getProducts();
    this.setState({products});
  }

  //Get prooduct from product list
  getProducts() {
    return this.state.products;
  }

  //Add product to product list
  onAdd(name,desc,price,status) {
    const products= this.getProducts();
    products.unshift({
      name,
      desc,
      price,
      status
    });
    this.setState({products});
  }

  //Delete product from list
  onDelete(name){
    const products= this.getProducts();
    const filteredProducts = products.filter(product=>
      {return product.name != name;}
    );
    this.setState({products:filteredProducts});
  }

  render() {
    let button;
    let staic = <div className="App"> <h1>Product Manager</h1>   <div class="ProductForm">
         <AddProduct onAdd={this.onAdd}></AddProduct>
        </div></div>
    //Render table on when product exist
    if (this.state.products.length > 0) {
      button = <div className="ProductList">
         <h1>Product Table</h1>
         <table className="ProductTable">
          <tbody>
           <tr className="ProductItemContainer" onClick={this.onDelete}>
            <th>Product Name</th>
            <th>Product desc</th>
            <th>Product price</th>
            <th>Availability</th>
           </tr>
            {
              this.state.products.map(product => {
                return (
                  <ErrorBoundary>

                    <ProductItem key={product.name} {...product} onDelete={this.onDelete}>
                    </ProductItem>

                  </ErrorBoundary>
                );
              })
            }
          </tbody>
         </table>
      </div>;
    }
    return (
    <div className="App">
     <div className="displayProducts">
      <div>{staic}</div>
      <div> {button} </div>
      </div>
    </div>
    );
  }
}

export default App;
