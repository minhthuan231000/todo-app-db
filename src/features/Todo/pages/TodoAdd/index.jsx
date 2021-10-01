import React, { useState } from 'react';
import { Alert, Col, Container } from 'reactstrap';
import TodoForm from '../TodoForm';

function TodoAdd(props) {
    const [alert, setAlert] = useState(false)
    const [typeAlert, setTypeAlert] = useState('')
    const [textAlert, setTextAlert] = useState('')
    function handleSubmit(data) {
        console.log(data);
        if (data) {
            if (data.title.length > 0 || data.content.length > 0) {
                setTypeAlert('success')
                setTextAlert('Thêm thành công')

            } else {
                setTypeAlert('danger')
                setTextAlert('Thêm thất bại')
            }
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 2000);
        }
    }

    return (
        <Container>
            <TodoForm onSubmit={handleSubmit} />
            <Col sm={5} >
                {alert && <Alert color={typeAlert}>
                    {textAlert}
                </Alert>}
            </Col>
        </Container>
    );
}

export default TodoAdd;