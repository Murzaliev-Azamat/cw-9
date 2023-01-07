import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import Categories from "./containers/Categories/Categories";
import AddTransaction from "./containers/AddTransaction/AddTransaction";
import AddCategory from "./containers/AddCategory/AddCategory";
import EditCategory from "./containers/EditCategory/EditCategory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={(
          <Home/>
        )}/>
        <Route path="/categories" element={(
          <Categories/>
        )}/>
        <Route path="/add-transaction" element={(
          <AddTransaction/>
        )}/>
        <Route path="/add-category" element={(
          <AddCategory/>
        )}/>
        <Route path="/edit-category/:id" element={(
          <EditCategory/>
        )}/>
        {/*<Route path="/admin" element={(*/}
        {/*  <Admin/>*/}
        {/*)}>*/}
        {/*  <Route path="dishes" element={(*/}
        {/*    <Categories/>*/}
        {/*  )}/>*/}
        {/*  <Route path="orders" element={(*/}
        {/*    <AddTransaction/>*/}
        {/*  )}/>*/}
        {/*</Route>*/}
        {/*<Route path="/add-dish" element={(*/}
        {/*  <Add/>*/}
        {/*)}/>*/}
        {/*<Route path="/edit-dish/:id" element={(*/}
        {/*  <EditTransaction/>*/}
        {/*)}/>*/}
        {/*<Route path="/client-order" element={(*/}
        {/*  <ClientCart/>*/}
        {/*)}/>*/}
      </Routes>
    </div>
  );
}

export default App;
