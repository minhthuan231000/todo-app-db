import React, { useEffect, useState } from 'react';
import { Container, Table } from 'reactstrap';
import './TodoList.scss'
const restAPI = 'https://fake-server-todo.herokuapp.com/todos';
function TodoList() {
    const [list, setList] = useState([])
    function getTodoList(callback) {
        try {
            fetch(restAPI)
                .then(response => response.json())
                .then(callback)
        } catch (error) {
            alert('Server wasnot start', error.message);
        }
    }
    function renderTodoList(todos) {
        setList(todos)
    }
    useEffect(() => {
        getTodoList(renderTodoList)
    }, [])
    return (
        <Container>
            <Table bordered responsive className="table__box">
                <thead>
                    <tr>
                        <th>Chủ đề</th>
                        <th>Nội dung</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((todo) => {
                            return <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.content}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default TodoList;