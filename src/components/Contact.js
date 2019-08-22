import React from "react";

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form method="post" action="https://formspree.io/LWZearfoss@gmail.com">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <span>
              330 Nord Ave
              <br />
              Chico, CA 95926
            </span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <span>(530) 632-1084</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <a href="mailto:LWZearfoss@gmail.com">LWZearfoss@gmail.com</a>{" "}
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-github"></span>
            <a href="https://github.com/LWZearfoss">github.com/LWZearfoss</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-linkedin"></span>
            <a href="https://www.linkedin.com/in/LWZearfoss">
              linkedin.com/in/LWZearfoss
            </a>
          </div>
        </section>
      </section>
    </div>
  </section>
);

export default Contact;
