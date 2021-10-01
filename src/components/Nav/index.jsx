import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './NavBarHeader.scss';

function NavBarHeader(props) {
    const match = useRouteMatch();
    return (
        <Container>
            <Row className="nav__box">
                <Col xs="auto" className="nav__item">
                    <NavLink
                        exact
                        className="nav__link"
                        to={`${match.url}/todoAdd`}
                        activeClassName="nav__link--active"
                    >
                        Thêm
                    </NavLink>
                </Col>
                <Col xs="auto" className="nav__item">
                    <NavLink
                        className="nav__link"
                        to={`${match.url}/todoDel`}
                        activeClassName="nav__link--active"
                    >
                        Xóa
                    </NavLink>
                </Col>
                <Col xs="auto" className="nav__item">
                    <NavLink
                        className="nav__link"
                        to={`${match.url}/todoEdit`}
                        activeClassName="nav__link--active"
                    >
                        Sửa
                    </NavLink>
                </Col>
                <Col xs="auto" className="nav__item">
                    <NavLink
                        className="nav__link"
                        to={`${match.url}/todoList`}
                        activeClassName="nav__link--active"
                    >
                        Danh sách
                    </NavLink>
                </Col>
            </Row>
        </Container>
    );
}

export default NavBarHeader;