import React from "react";

const Pdf = props => (
  <section>
    <div className="inner">
      <div className="pdfwrapper">
        <header className="major">
          <h1>Resume</h1>
        </header>
        <div className="pdf">
          <iframe
            className="pdf"
            title="PDF"
            src="https://docs.google.com/gview?url=https://luke.zone/portfolio/resume.pdf&embedded=true"
            frameborder="0"
          >
            This browser does not support PDFs. Please download the PDF to view
            it: <a href="portfolio/resume.pdf">Download PDF</a>
          </iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Pdf;
