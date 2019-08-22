import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Banner from "../components/Banner";
import Pdf from "../components/Pdf";

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Luke Zearfoss"
          htmlAttributes={{
            lang: "en"
          }}
          meta={[
            { name: "description", content: "This is the homepage" },
            {
              name: "keywords",
              content: "luke, zearfoss, lwzearfoss, personal, website"
            },
            {
              name: "google-site-verification",
              content: "hmvowHDQUK0PYBguneedHvc6veafm99RbWHdS_IJu3A"
            }
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section>
            <div className="inner">
              <header className="major" id="alt">
                <h1>Projects</h1>
              </header>

              <header className="major">
                <h4>
                  <a id="C++">C++</a>
                </h4>
              </header>
              <div className="grid-wrapper">
                <div className="col-6">
                  <div className="box">
                    <h4>Guess</h4>
                    <p>
                      A simple number guessing game with various difficulty
                      levels coded in C++.
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="projects/cpp/guess" className="button">
                          See more
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="box">
                    <h4>Rock Paper Scissors</h4>
                    <p>
                      A C++ version of the classic game Rock Paper Scissors
                      which displays player stats.
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="projects/cpp/rps" className="button">
                          See more
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <header className="major">
                <h4>
                  <a id="JavaScript">JavaScript</a>
                </h4>
              </header>
              <div className="grid-wrapper">
                <div className="col-6">
                  <div className="box">
                    <h4>JS Hangman</h4>
                    <p>
                      A simple version of the word game Hangman coded in
                      JavaScript which pools words from an array file.
                    </p>
                    <ul className="actions">
                      <li>
                        <a
                          href="projects/javascript/jshangman"
                          className="button"
                        >
                          See more
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="box">
                    <h4>JS Graph</h4>
                    <p>
                      A program which uses a graphing library to visually
                      represent vertices and edges and perform algorithms.
                    </p>
                    <ul className="actions">
                      <li>
                        <a
                          href="projects/javascript/jsgraph"
                          className="button"
                        >
                          See more
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <header className="major">
                <h4>
                  <a id="Python">Python</a>
                </h4>
              </header>
              <div className="grid-wrapper">
                <div className="col-6">
                  <div className="box">
                    <h4>PY Hangman</h4>
                    <p>
                      A version of the word game Hangman coded in Python which
                      pulls words from a remote dictionary file.
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="projects/python/pyhangman" className="button">
                          See more
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="box">
                    <h4>PY Calculator</h4>
                    <p>
                      A multi-calculator coded in Python that can estimate
                      derivatives and integrals.
                    </p>
                    <ul className="actions">
                      <li>
                        <a
                          href="projects/python/pycalculator"
                          className="button"
                        >
                          See more
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Pdf />
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
