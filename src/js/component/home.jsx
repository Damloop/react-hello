import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat([inputValue]));
                setInputValue("");
              }
            }}
            placeholder="What do you need to do?"
          ></input>
        </li>

        {todos.map((item, index) => (
          <li>
            {item}{" "}
            <i
              class="fas fa-trash-alt"
              onClick={() =>
                setTodos(
                  todos.filter((t, currentIndex) => index != currentIndex)
                )
              }
            ></i>
          </li>
        ))}
      </ul>

      <div>{todos.length}</div>
    </div>
  );
};

export default Home;
