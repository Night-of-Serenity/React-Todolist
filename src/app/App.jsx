import "./App.scss"; // Global
import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TodoContent } from "../components/Todo/TodoContent";
// import allTodoMock from "../data/todos.json";
import { getSevenDayRange } from "../utils/DateUtils";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]); // Original todo
  const [filterList, setFilterList] = useState([]); // filter todo

  useEffect(() => {
    // Run After Did Mount
    axios({
      method: "get",
      url: " http://localhost:8080/todos",
    })
      .then((response) => {
        console.log(response.status);
        console.log(response);
        console.log(response.data);
        console.log(response.data.todos);

        let todoList = response.data.todos;
        setTodos(todoList);
        setFilterList(todoList);
      })
      .catch((err) => console.log(err.response.status));
  }, []);

  // Filter Todo
  const handleFilterLists = (index) => {
    const [nowStr, nextSevenStr] = getSevenDayRange();

    let filteredTodo = [...todos];

    // FILTER LOGIC : Schema for fillter "2023-04-29" == YYYY-MM-DD
    if (index == 0) {
      setFilterList(todos);
    } else if (index === 1) {
      filteredTodo = todos.filter((todoObj) => todoObj.date === nowStr);
      setFilterList(filteredTodo);
    } else if (index === 2) {
      filteredTodo = todos.filter((todoObj) => todoObj.date >= nowStr && todoObj.date <= nextSevenStr);
      setFilterList(filteredTodo);
    }
  };

  // Search Todo
  const handleSearch = (searchText) => {
    const newTodo = filterList.filter((todoObj) => todoObj.task.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    // setTodos(newTodo)
    setFilterList(newTodo);
  };

  // Sort Todo
  const handleSort = (sortType) => {
    let sortedLists = [];
    //Sort by status
    if (sortType === "sortStatus") {
      console.log(sortType);
      const statusTrueList = [];
      const stateFalseList = [];
      for (let todoItem of filterList) {
        if (todoItem.status === true) statusTrueList.push(todoItem);
        else stateFalseList.push(todoItem);
      }
      sortedLists = [...statusTrueList, ...stateFalseList];
    }
    // Sort by date
    else if (sortType === "sortDate") {
      console.log(sortType);
      sortedLists = [...filterList];
      sortedLists.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        } else return -1;
      });
    }
    // Sort by task
    else if (sortType === "sortTask") {
      console.log(sortType);
      console.log(sortType);
      sortedLists = [...filterList];
      sortedLists.sort((a, b) => {
        if (a.task > b.task) {
          return 1;
        } else return -1;
      });
    }
    // Reverse sort
    else if (sortType === "reverseSort") {
      console.log(sortType);
      sortedLists = [...filterList];
      sortedLists.reverse();
    }
    setFilterList(sortedLists);
    // setTodos(sortedLists);
  };

  return (
    <div className="container">
      <Header onSearchText={handleSearch} />
      <Sidebar onSelectTab={handleFilterLists} />
      <TodoContent todos={filterList} setTodos={setFilterList} onTodoSort={handleSort} />
    </div>
  );
}

export default App;
