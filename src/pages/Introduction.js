import React from "react";
import Jumbo from "../components/Jumbotron/Jumbotron";

const headline = "Meet Hilary.";
const leadText = "An aspiring full stack developer after 10+ years on the operations side of healthcare technology. Graduate, University of New Hampshire Full Stack Coding Bootcamp. Acquiring proficiency in HTML, CSS, Javascript, jQuery, APIs, Node.js, Express, Express Handlebars, MySQL, Sequelize, MongoDB, Mongoose, React, MERN Stack, Heroku. Loves reading, royal-watching, travel shows, and her Boston Terrier.";

const Introduction = () => {
    return (
        <div>
            <Jumbo
                headline={headline}
                leadText={leadText}
            />
        </div>
    );
}

export default Introduction;

// from previous portfolio
