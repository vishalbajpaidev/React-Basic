import React from 'react'

export default class Cart extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      Items  : [ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120} ]
    }
  }
  render(){
    return(
      <div>
        <Item items = {this.state.Items} ></Item>
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
    const itemList = itemDetails.map((itemDetail) => <tr><td>{itemDetail.name}</td><td>{itemDetail.qty}</td><td>{itemDetail.price}</td></tr> );


    return(
      <table>{itemList} </table>
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
      <div>Total Cart value is {totalValue} </div>
    )
  }
}
