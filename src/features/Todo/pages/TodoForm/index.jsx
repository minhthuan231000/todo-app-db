import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import './TodoForm.scss';
TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
const restAPI = 'https://fake-server-todo.herokuapp.com/todos';

function TodoForm(props) {
    const [titleJob, setTitleJob] = useState('');
    const [contentJob, setContentJob] = useState('');
    const { onSubmit } = props;
    function handleChangeTitle(e) {
        setTitleJob(e.target.value);
    }
    function handleChangeContent(e) {
        setContentJob(e.target.value);
    }
    function hanldeSubmit(e) {
        e.preventDefault();
        // default success
        const formData = {
            title: titleJob,
            content: contentJob,
        }
        if (formData.title === '' || formData.content === '') {
            onSubmit(formData)
        } else {
            createTodoList(formData);
            onSubmit(formData)
        }
    }
    function createTodoList(data, callback) {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(restAPI, options)
            .then(response => response.json())
            .then(callback)
    }
    return (
        <Form onSubmit={(e) => hanldeSubmit(e)}>
            <FormGroup className="input__group">
                <span className="input__group--item">Chủ đề: </span>
                <Col sm={5} className="input__group--item">
                    <Input sm={5} type="text" name='title' id='inputTitle' value={titleJob} onChange={handleChangeTitle} />
                </Col>
            </FormGroup>
            <FormGroup className="input__group">
                <span className="input__group--item">Nội dung: </span>
                <Col sm={5} className="input__group--item">
                    <Input sm={5} type="textarea" name='content' id='inputContent' value={contentJob} onChange={handleChangeContent} />
                </Col>
            </FormGroup>
            <button type="submit" className="btn btn-info">Thêm</button>
        </Form>
    );
}

export default TodoForm;