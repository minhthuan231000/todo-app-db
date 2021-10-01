import React, { useEffect, useState } from 'react';
import { Container, Table } from 'reactstrap';
import './TodoDel.scss'
TodoDel.propTypes = {

};
const restAPI = 'https://fake-server-todo.herokuapp.com/todos';
function TodoDel(props) {
    const [list, setList] = useState([])
    function getTodoList(callback) {
        try {
            fetch(restAPI)
                .then(response => response.json())
                .then(callback)
        } catch (error) {
            alert('Server not start', error.message);
        }
    }
    function renderTodoList(todos) {
        setList(todos)
    }
    function handleDelTodo(e) {
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(restAPI + '/' + e.target.id, options)
            .then(response => response.json())
            .then(function () {
                getTodoList(renderTodoList)
            })
    }
    useEffect(() => {
        getTodoList(renderTodoList)
    }, [])

    console.log(list)
    return (
        <Container>
            <Table responsive className="table__box">
                <thead>
                    <tr>
                        <th>Chủ đề</th>
                        <th>Nội dung</th>
                        <th style={{ textAlign: 'center' }}>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((todo) => {
                            return <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.content}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <button onClick={handleDelTodo} id={todo.id} className="btn btn-info w-50">Xóa</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default TodoDel;