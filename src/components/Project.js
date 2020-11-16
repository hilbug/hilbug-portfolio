import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const Project = ({ title, ...props }) => (
    <Col md={4}>
        <Card className="mb-4 shadow-sm">
            <Card.Img src={props.imgUrl} variant="top" width="100%" height="225" alt={props.imgAlt} />
            <Card.Body>
                <Card.Title className="text-center">{title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <div className="d-flex justify-content-center align-items-center">
                    <ButtonGroup aria-label="Project Links" >
                        <Button href={props.appLink} size="sm" variant="outline-secondary">App</Button>
                        <Button href={props.codeLink} size="sm" variant="outline-secondary">Code</Button>
                    </ButtonGroup>
                </div>
            </Card.Body>
            <Card.Footer>Technologies: {props.tech}</Card.Footer>
        </Card>
    </Col>
);

export default Project;

/*
*
Props: title, description, appLink, codeLink, tech, imgUrl, imgAlt
*
*/