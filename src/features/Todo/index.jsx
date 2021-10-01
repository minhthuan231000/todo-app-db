import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';
import NotFound from './../../components/NotFound';
import MainPage from './pages/Main';
import TodoAdd from './pages/TodoAdd';
import TodoDel from './pages/TodoDel';
import TodoEdit from './pages/TodoEdit';
import TodoList from './pages/TodoList';
Todo.propTypes = {};

function Todo(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path={match.url} component={MainPage} />

                <Route path={`${match.url}/todoAdd`} component={TodoAdd} />
                <Route path={`${match.url}/todoDel`} component={TodoDel} />
                <Route path={`${match.url}/todoEdit`} component={TodoEdit} />
                <Route path={`${match.url}/todoList`} component={TodoList} />

                <Route component={NotFound} />
            </Switch>

        </div>
    );
}

export default Todo;