import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./jumbo.css"


const Jumbo = (props) => (
    <Jumbotron className="text-center jumbo">
        <Container>
            <Row>

                {/* <!-- Jumbotron - Name & Intro --> */}
                <div className="col-md-5 mx-auto d-flex align-items-center justify-content-center">
                    <div className="flex-column">
                        <h1 className="headline">{props.headline}</h1>
                        <p className="lead lead-bio text-muted">{props.leadText}</p>
                    </div>
                </div>
                {/* <!-- Jumbotron - Picture --> */}
                <div className="col-md-5 mx-auto d-flex align-items-center justify-content-center">
                    <img className="hilpic rounded" src="./assets/images/hilary_portfolio_small.jpg"
                        alt="hilary smiling at camera" />
                </div>
            </Row>
        </Container>
    </Jumbotron>
);

export default Jumbo;

/*
props
headline: "Meet Hilary"
leadText: "An aspiring full stack developer after 10+ years on the operations side of healthcare technology. Currently enrolled in UNH's Coding Bootcamp. Acquiring proficiency in HTML, CSS, Javascript, jQuery, Node.js, MySQL, APIs/AJAX, Express, React, Perl. Loves her Boston Terrier, reading, royal-watching, and travel shows.";
*/