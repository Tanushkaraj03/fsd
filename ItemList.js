import React,{Component} from 'react';
class ItemList extends Component{
  render(){
    const{items}=this.props;
    return(
      <div>
        {items.map((item,index)=> (
        <div key={index}>{item}</div>))}
      </div>
    );
  }
}
export default ItemList;