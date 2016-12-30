import React from 'react'

export default class Cart extends React.Component{

  constructor(){
    super()

    this.state = {
      Items  : [ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120} ],
      error: ""
    }
    this.addItem = this.addItem.bind(this);
    this.incQty = this.incQty.bind(this);
    this.decQty = this.decQty.bind(this);
    this.deleteFun = this.deleteFun.bind(this);

  }

  addItem(e){
    let itemInfo = this.refs.itemInfo.value;
    let itemInfoSplit = itemInfo.split('-');
    // console.log(!!itemInfoSplit[1],isNaN(itemInfoSplit[1]))
    if(!itemInfoSplit[1] || (itemInfoSplit[1] && isNaN(itemInfoSplit[1]) )){
      // console.log(!!itemInfoSplit[1],isNaN(itemInfoSplit[1]))
      e.preventDefault();
      this.setState({error:"Enter a valid value."})
      return;
    }else{
      this.setState({error:""})
    }
    let name = itemInfoSplit[0];
    let price = itemInfoSplit[1];
    let qty = itemInfoSplit[2] || 1;
    // let newState = this.state.Items;
    // newState.push({name,price,qty})
    this.setState({
      Items : [...this.state.Items,{name,price,qty}]
    });
    console.log(this.state.Items,"<<<<<>>> ");
  }

  incQty(item,index){
    // console.log(item,index,this.state.Items);
    let newState = this.state.Items;
    item.qty = parseInt(item.qty) == -1? 0 : parseInt(item.qty) + 1;
    newState[index] = item;
    this.setState({Items:newState});
  }

  decQty(item,index){
    // console.log(item,index,this.state.Items);
    let newState = this.state.Items;
    item.qty = parseInt(item.qty) == 0? 0 : parseInt(item.qty) - 1;
    newState[index] = item;
    this.setState({Items:newState});
  }

  deleteFun(item,index){
    // console.log(item,index,this.state.Items);
    let newState = this.state.Items;
    delete newState[index];
    this.setState({Items:newState});
  }

  render(){
    return(
      <div>
        <span>Item and price sperated by a -(hyphen)</span>
        <sapn className="error">{this.state.error}</sapn>
        <input type="text" ref="itemInfo"/> <button onClick={this.addItem}>Add</button>
        <h2>My Cart</h2>
        <Item items = {this.state.Items} incQtyFun={this.incQty} decQtyFun={this.decQty} deleteFun={this.deleteFun}></Item>
        <CartTotal items = {this.state.Items} ></CartTotal>
      </div>
    )
  }
}


class Item extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let itemDetails  = this.props.items;
    const itemList = itemDetails.map((itemDetail,i) =>
      <tr>
        <td>{itemDetail.name}</td>
        <td>{itemDetail.qty}</td>
        <td>{itemDetail.price}</td>
        <td><button onClick={()=>this.props.incQtyFun(itemDetail,i)}>Increse Qty</button></td>
        <td><button onClick={()=>this.props.decQtyFun(itemDetail,i)}>Decrese Qty</button></td>
        <td><button onClick={()=>this.props.deleteFun(itemDetail,i)}>delete</button></td>
      </tr> );
    return(
      <table>
        <tr>
          <td>Name</td>
          <td>Qty</td>
          <td>Price</td>
        </tr>
        {itemList}
      </table>
    )
  }
}

class CartTotal extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    let itemDetails  = this.props.items;
    let  totalValue = itemDetails.reduce((total,itemDetail) =>  total + (itemDetail.qty * itemDetail.price),0)
    return(
      <div>
        Total Cart value is {totalValue}
      </div>
    )
  }
}

CartTotal.propTypes = {
  items: React.PropTypes.array.isRequired,
}
