
import React, {Component} from 'react';
import ItemList from './ItemList';
class Main extends Component{
  render() {
    const items=['Cat','Dog','Chicken','Cow','Sheep','Horse'];
    return(
      <div>
        <h1>List of items</h1>
        <ItemList items={items}/>
      </div>
    );
  }
}
export default Main;

