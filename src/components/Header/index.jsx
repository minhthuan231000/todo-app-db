import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import NavBarHeader from '../Nav';
import './Header.scss';

function Header(props) {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <h3>KoroDango</h3>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/todos"
                            activeClassName="header__link--active"
                        >
                            Todo App
                        </NavLink>
                    </Col>
                </Row>
                <NavBarHeader />
            </Container>
        </header>
    );
}

export default Header;