import { useState } from 'react';
import './App.css';
import List1 from '../List1/List1';
import List2 from '../List2/List2';

import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';
import ToDoList from '../ToDoList/ToDoList';

function App() {


  const [flag, setFlag] = useState(true);
  const [items, setItems] = useState([]);

  const [toDoValue, setToDoValue] = useState('');
  const [toDoArray, setToDoArray] = useState([])

  const handleChangeFlag = () => {
    setFlag(!flag)
  }

  const handleAddItem = () => {
    const item = faker.name.fullName();
    const id = v4();

    setItems(
      [...items,
      {name: item, id: id}]
    )
  }

  const handleInputChange = (e) => {
    setToDoValue(e.target.value)
  }

  const handleAddTask = () => {
    setToDoArray([...toDoArray, toDoValue]);
    setToDoValue('')
  }

  return (
    <div className="App">

      <button onClick={handleChangeFlag}>change flag</button>
      <button onClick={handleAddItem}>Add item</button>
      {flag ? <List1 items={items} /> : <List2 items={items} />}

      <form onSubmit={(e) => {e.preventDefault()}}>
        <input type='text' value={toDoValue} onChange={handleInputChange}/>
        <input type='button' value='add' onClick={handleAddTask}/>
      </form>
      <ToDoList array={toDoArray}/>
    </div>
  );
}

export default App;
