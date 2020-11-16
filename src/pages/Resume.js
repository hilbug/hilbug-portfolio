import React from "react";

function Resume() {
    return (
        <section id="resume" className="album2 py-5 diagonal-box-white  mt-5">
            <div className="container">
                <h2 className="album-left album-left-resume">Resume</h2>
                <div className="row content">
                    <div className="col-md-12 d-flex justify-content-center embed-responsive embed-responsive-16by9">
                        <iframe title="Hilary's resume" src="https://hilbug.github.io/assets/HilaryFerraro_Resume_Oct2020_online.pdf#toolbar=0"
                            type="application/pdf" width="75%" height="500px" className="embed-responsive-item">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;

/*
*
Embed PDF of resume 
https://stackoverflow.com/questions/30745981/opening-pdf-in-a-browser-with-github-pages#:~:text=Make%20the%20static%20website%2Frepository,of%20Pdf%20wherever%20you%20want
*
*/