import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import UserAdd from './Components/UserAdd';
import UserList from './Components/UserList';
import UserDelete from './Components/UserDelete';
import UserUpdate from './Components/UserUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Route component={UserList} path='/' strict exact ></Route>
          <Route component={UserAdd} path='/add' strict exact ></Route>
          <Route component={UserDelete} path='/delete' strict exact ></Route>
          <Route component={UserUpdate} path='/update' strict exact ></Route>
        </div>
      </BrowserRouter>

    </div>
  );
}



export default App;
