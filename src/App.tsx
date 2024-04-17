// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Board from './components/tic-tac-toe';
import TodoList from "./components/to-do-list";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
// import ToggleTheme from "./components/theme-toogle";

function App() {
  // return <Board />;
  return (
    <Router>
      <div className="nav-btns">
        <Link to='/'>Counter - Used useReducer Hook</Link>
        <Link to='/all-products'>All Products</Link>
        <Link to='/tictactoe'>Tic-Tac-Toe</Link>
        <Link to='/todolist'>To-Do List</Link>
        {/* <ToggleTheme /> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tictactoe" element={<Board />} />
        <Route path="/todolist" element={<TodoList/>} />
        <Route path="/all-products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App
