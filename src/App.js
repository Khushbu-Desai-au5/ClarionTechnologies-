import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login'
import Dashboard from './dashboard'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
