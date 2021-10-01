import React, { useEffect, useState } from 'react';
import { Container, Table } from 'reactstrap';
import './TodiEdit.scss';
TodoEdit.propTypes = {

};
const restAPI = 'https://fake-server-todo.herokuapp.com/todos';
function TodoEdit(props) {
    const [list, setList] = useState([])
    const [todo, setTodo] = useState({
        id: null,
        title: '',
        content: ''
    });
    function getTodoList(callback) {
        try {
            fetch(restAPI)
                .then(response => response.json())
                .then(callback)
        } catch (error) {
            alert('Server not start', error.message);
        }
    }
    function getTodoById(callback, id) {
        try {
            fetch(`${restAPI}/${id}`)
                .then(response => response.json())
                .then(callback)
        } catch (error) {
            alert('Server not start', error.message);
        }
    }
    function renderTodoById(todo) {
        setTodo(todo)
    }
    function renderTodoList(todos) {
        setList(todos)
    }

    function handleSubmitEdit(e) {
        // default success
        const elementTitle = document.getElementById(`title${e.target.id}`)
        const elementContent = document.getElementById(`content${e.target.id}`)

        const formData = {
            id: e.target.id,
            title: elementTitle.value,
            content: elementContent.value,
        }
        editTodoList(formData)
        setTodo({
            id: '',
            title: '',
            content: '',
        })
        setEnableEdit(!enableEdit)

    }
    function editTodoList(data) {
        const options = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch(`${restAPI}/${data.id}`, options)
            .then(response => response.json())
            .then(function () {
                getTodoList(renderTodoList)
            })
    }
    useEffect(() => {
        getTodoList(renderTodoList)
    }, [])
    const [enableEdit, setEnableEdit] = useState(false)
    function handleEditClick(e) {
        getTodoById(renderTodoById, e.target.id)
        setEnableEdit(!enableEdit)
    }
    function handleTodo(e) {
        let { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value
        })
    }
    return (
        <Container>
            <Table responsive className="table__box">
                <thead>
                    <tr>
                        <th>Chủ đề</th>
                        <th>Nội dung</th>
                        <th style={{ textAlign: 'center' }}>Chỉnh sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((todo) => {
                            return <tr key={todo.id}>
                                <td>
                                    <input type="text" id='title' value={todo.title} readOnly />
                                </td>
                                <td>
                                    <input type="text" id="content" value={todo.content} readOnly />
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <button onClick={handleEditClick} id={todo.id} className="btn btn-info w-50" disabled={enableEdit}>Sửa</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            <div>
                <h5>Chủ đề</h5>
                <input name='title' id={"title" + todo.id} value={todo.title} onChange={handleTodo} />
            </div>
            <div>
                <h5>Nội dung</h5>
                <input name='content' id={"content" + todo.id} value={todo.content} onChange={handleTodo} />
            </div>
            <button onClick={handleSubmitEdit} id={todo.id} className="btn btn-info">Lưu</button>
        </Container>
    );
}

export default TodoEdit;