import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Loading from './components/Loading';
// Lazy load - Code splitting
const Todo = React.lazy(() => import('./features/Todo'));
function App() {
  return (
    <div id="todo-app">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/todos" />
            <Route path="/todos" component={Todo} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
