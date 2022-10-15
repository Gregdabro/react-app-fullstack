import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {
        id: 1,
        name: "12 pro",
        price: 100000,
        rating: 0,
        img: "https://picsum.photos/200"
    }
    const description = [
        {id: 1, title: "Оперативная память", description: "5гб"},
        {id: 2, title: "Камера", description: "12мп"},
        {id: 3, title: "Процессор", description: "Пентиум 3"},
        {id: 4, title: "Кол-во ядер", description: "2"},
        {id: 5, title: "Аккумулятор", description: "4000"}
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            style={
                            {
                                background: `url(${bigStar}) no-repeat center center`,
                                height: 240,
                                width: 240,
                                backgroundSize: "cover",
                                fontSize: 64
                            }}
                            className="d-flex align-items-center justify-content-center">
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        style={{width: 300, height: 300, fontSize: 32, border: "5px solid lightgray"}}
                        className="d-flex flex-column align-items-center justify-content-around">
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row
                        style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
                        key={info.id}
                    >
                        {info.title}: {info.description}
                    </Row>
                )
                }
            </Row>
        </Container>
    );
};

export default DevicePage;
