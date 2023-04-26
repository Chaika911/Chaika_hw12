import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import { v4 } from "uuid";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(curentProps){
    return curentProps.array.length !== this.props.array.length
  }

  render() {
    console.log('render');
    return (
      <ul>
        {this.props.array.map(item => (
          <ToDoItem key={v4()} item={item} />
        ))}
      </ul>
    );
  }
}

export default ToDoList;