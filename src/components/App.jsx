import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [inText, setInText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setInText(value);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, inText];
    });
    setInText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function handleClear() {
    setItems([]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea text={inText} onAdded={handleClick} onChanged={handleChange} />
      <div>
        <ul>
          {items.map((toDoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={toDoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
      <button onClick={handleClear}>Clear all</button>
    </div>
  );
}

export default App;
