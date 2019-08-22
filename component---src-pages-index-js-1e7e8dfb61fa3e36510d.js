(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    191: function(e, a, t) {
      "use strict";
      t.r(a);
      var l = t(0),
        n = t.n(l),
        r = t(195),
        c = t.n(r),
        s = t(192),
        m = function(e) {
          return n.a.createElement(
            "section",
            { id: "banner" },
            n.a.createElement(
              "div",
              { className: "inner" },
              n.a.createElement(
                "header",
                { className: "major" },
                n.a.createElement("h1", null, "Luke Zearfoss")
              ),
              n.a.createElement(
                "div",
                { className: "content" },
                n.a.createElement("p", null, "Chico State CS Major")
              )
            )
          );
        },
        o = function(e) {
          return n.a.createElement(
            "section",
            null,
            n.a.createElement(
              "div",
              { className: "inner" },
              n.a.createElement(
                "div",
                { className: "pdfwrapper" },
                n.a.createElement(
                  "header",
                  { className: "major" },
                  n.a.createElement("h1", null, "Resume")
                ),
                n.a.createElement(
                  "div",
                  { className: "pdf" },
                  n.a.createElement(
                    "iframe",
                    {
                      className: "pdf",
                      title: "PDF",
                      src:
                        "https://docs.google.com/gview?url=https://luke.zone/portfolio/resume.pdf&embedded=true",
                      frameborder: "0"
                    },
                    "This browser does not support PDFs. Please download the PDF to view it: ",
                    n.a.createElement(
                      "a",
                      { href: "portfolio/resume.pdf" },
                      "Download PDF"
                    )
                  )
                )
              )
            )
          );
        };
      var i = (function(e) {
        var a, t;
        function l() {
          return e.apply(this, arguments) || this;
        }
        return (
          (t = e),
          ((a = l).prototype = Object.create(t.prototype)),
          (a.prototype.constructor = a),
          (a.__proto__ = t),
          (l.prototype.render = function() {
            return n.a.createElement(
              s.a,
              null,
              n.a.createElement(c.a, {
                title: "Luke Zearfoss",
                meta: [
                  { name: "description", content: "This is the homepage" },
                  {
                    name: "keywords",
                    content: "luke, zearfoss, lwzearfoss, personal, website"
                  },
                  {
                    name: "google-site-verification",
                    content: "hmvowHDQUK0PYBguneedHvc6veafm99RbWHdS_IJu3A"
                  }
                ]
              }),
              n.a.createElement(m, null),
              n.a.createElement(
                "div",
                { id: "main" },
                n.a.createElement(
                  "section",
                  null,
                  n.a.createElement(
                    "div",
                    { className: "inner" },
                    n.a.createElement(
                      "header",
                      { className: "major", id: "alt" },
                      n.a.createElement("h1", null, "Projects")
                    ),
                    n.a.createElement(
                      "header",
                      { className: "major" },
                      n.a.createElement(
                        "h4",
                        null,
                        n.a.createElement("a", { id: "C++" }, "C++")
                      )
                    ),
                    n.a.createElement(
                      "div",
                      { className: "grid-wrapper" },
                      n.a.createElement(
                        "div",
                        { className: "col-6" },
                        n.a.createElement(
                          "div",
                          { className: "box" },
                          n.a.createElement("h4", null, "Guess"),
                          n.a.createElement(
                            "p",
                            null,
                            "A simple number guessing game with various difficulty levels coded in C++."
                          ),
                          n.a.createElement(
                            "ul",
                            { className: "actions" },
                            n.a.createElement(
                              "li",
                              null,
                              n.a.createElement(
                                "a",
                                {
                                  href: "projects/cpp/guess",
                                  className: "button"
                                },
                                "See more"
                              )
                            )
                          )
                        )
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-6" },
                        n.a.createElement(
                          "div",
                          { className: "box" },
                          n.a.createElement("h4", null, "Rock Paper Scissors"),
                          n.a.createElement(
                            "p",
                            null,
                            "A C++ version of the classic game Rock Paper Scissors which displays player stats."
                          ),
                          n.a.createElement(
                            "ul",
                            { className: "actions" },
                            n.a.createElement(
                              "li",
                              null,
                              n.a.createElement(
                                "a",
                                {
                                  href: "projects/cpp/rps",
                                  className: "button"
                                },
                                "See more"
                              )
                            )
                          )
                        )
                      )
                    ),
                    n.a.createElement(
                      "header",
                      { className: "major" },
                      n.a.createElement(
                        "h4",
                        null,
                        n.a.createElement(
                          "a",
                          { id: "JavaScript" },
                          "JavaScript"
                        )
                      )
                    ),
                    n.a.createElement(
                      "div",
                      { className: "grid-wrapper" },
                      n.a.createElement(
                        "div",
                        { className: "col-6" },
                        n.a.createElement(
                          "div",
                          { className: "box" },
                          n.a.createElement("h4", null, "JS Hangman"),
                          n.a.createElement(
                            "p",
                            null,
                            "A simple version of the word game Hangman coded in JavaScript which pools words from an array file."
                          ),
                          n.a.createElement(
                            "ul",
                            { className: "actions" },
                            n.a.createElement(
                              "li",
                              null,
                              n.a.createElement(
                                "a",
                                {
                                  href: "projects/javascript/jshangman",
                                  className: "button"
                                },
                                "See more"
                              )
                            )
                          )
                        )
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-6" },
                        n.a.createElement(
                          "div",
                          { className: "box" },
                          n.a.createElement("h4", null, "JS Graph"),
                          n.a.createElement(
                            "p",
                            null,
                            "A program which uses a graphing library to visually represent vertices and edges and perform algorithms."
                          ),
                          n.a.createElement(
                            "ul",
                            { className: "actions" },
                            n.a.createElement(
                              "li",
                              null,
                              n.a.createElement(
                                "a",
                                {
                                  href: "projects/javascript/jsgraph",
                                  className: "button"
                                },
                                "See more"
                              )
                            )
                          )
                        )
                      )
                    ),
                    n.a.createElement(
                      "header",
                      { className: "major" },
                      n.a.createElement(
                        "h4",
                        null,
                        n.a.createElement("a", { id: "Python" }, "Python")
                      )
                    ),
                    n.a.createElement(
                      "div",
                      { className: "grid-wrapper" },
                      n.a.createElement(
                        "div",
                        { className: "col-6" },
                        n.a.createElement(
                          "div",
                          { className: "box" },
                          n.a.createElement("h4", null, "PY Hangman"),
                          n.a.createElement(
                            "p",
                            null,
                            "A version of the word game Hangman coded in Python which pulls words from a remote dictionary file."
                          ),
                          n.a.createElement(
                            "ul",
                            { className: "actions" },
                            n.a.createElement(
                              "li",
                              null,
                              n.a.createElement(
                                "a",
                                {
                                  href: "projects/python/pyhangman",
                                  className: "button"
                                },
                                "See more"
                              )
                            )
                          )
                        )
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-6" },
                        n.a.createElement(
                          "div",
                          { className: "box" },
                          n.a.createElement("h4", null, "PY Calculator"),
                          n.a.createElement(
                            "p",
                            null,
                            "A multi-calculator coded in Python that can estimate derivatives and integrals."
                          ),
                          n.a.createElement(
                            "ul",
                            { className: "actions" },
                            n.a.createElement(
                              "li",
                              null,
                              n.a.createElement(
                                "a",
                                {
                                  href: "projects/python/pycalculator",
                                  className: "button"
                                },
                                "See more"
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                n.a.createElement(o, null)
              )
            );
          }),
          l
        );
      })(n.a.Component);
      a.default = i;
    },
    192: function(e, a, t) {
      "use strict";
      var l = t(0),
        n = t.n(l),
        r =
          (t(193),
          function(e) {
            return n.a.createElement(
              "section",
              { id: "contact" },
              n.a.createElement(
                "div",
                { className: "inner" },
                n.a.createElement(
                  "section",
                  null,
                  n.a.createElement(
                    "form",
                    {
                      method: "post",
                      action: "https://formspree.io/LWZearfoss@gmail.com"
                    },
                    n.a.createElement(
                      "div",
                      { className: "field half first" },
                      n.a.createElement("label", { htmlFor: "name" }, "Name"),
                      n.a.createElement("input", {
                        type: "text",
                        name: "name",
                        id: "name"
                      })
                    ),
                    n.a.createElement(
                      "div",
                      { className: "field half" },
                      n.a.createElement("label", { htmlFor: "email" }, "Email"),
                      n.a.createElement("input", {
                        type: "text",
                        name: "email",
                        id: "email"
                      })
                    ),
                    n.a.createElement(
                      "div",
                      { className: "field" },
                      n.a.createElement(
                        "label",
                        { htmlFor: "message" },
                        "Message"
                      ),
                      n.a.createElement("textarea", {
                        name: "message",
                        id: "message",
                        rows: "6"
                      })
                    ),
                    n.a.createElement(
                      "ul",
                      { className: "actions" },
                      n.a.createElement(
                        "li",
                        null,
                        n.a.createElement("input", {
                          type: "submit",
                          value: "Send Message",
                          className: "special"
                        })
                      ),
                      n.a.createElement(
                        "li",
                        null,
                        n.a.createElement("input", {
                          type: "reset",
                          value: "Clear"
                        })
                      )
                    )
                  )
                ),
                n.a.createElement(
                  "section",
                  { className: "split" },
                  n.a.createElement(
                    "section",
                    null,
                    n.a.createElement(
                      "div",
                      { className: "contact-method" },
                      n.a.createElement("span", {
                        className: "icon alt fa-home"
                      }),
                      n.a.createElement(
                        "span",
                        null,
                        "330 Nord Ave",
                        n.a.createElement("br", null),
                        "Chico, CA 95926"
                      )
                    )
                  ),
                  n.a.createElement(
                    "section",
                    null,
                    n.a.createElement(
                      "div",
                      { className: "contact-method" },
                      n.a.createElement("span", {
                        className: "icon alt fa-phone"
                      }),
                      n.a.createElement("span", null, "(530) 632-1084")
                    )
                  ),
                  n.a.createElement(
                    "section",
                    null,
                    n.a.createElement(
                      "div",
                      { className: "contact-method" },
                      n.a.createElement("span", {
                        className: "icon alt fa-envelope"
                      }),
                      n.a.createElement(
                        "a",
                        { href: "mailto:LWZearfoss@gmail.com" },
                        "LWZearfoss@gmail.com"
                      ),
                      " "
                    )
                  ),
                  n.a.createElement(
                    "section",
                    null,
                    n.a.createElement(
                      "div",
                      { className: "contact-method" },
                      n.a.createElement("span", {
                        className: "icon alt fa-github"
                      }),
                      n.a.createElement(
                        "a",
                        { href: "https://github.com/LWZearfoss" },
                        "github.com/LWZearfoss"
                      )
                    )
                  ),
                  n.a.createElement(
                    "section",
                    null,
                    n.a.createElement(
                      "div",
                      { className: "contact-method" },
                      n.a.createElement("span", {
                        className: "icon alt fa-linkedin"
                      }),
                      n.a.createElement(
                        "a",
                        { href: "https://www.linkedin.com/in/LWZearfoss" },
                        "linkedin.com/in/LWZearfoss"
                      )
                    )
                  )
                )
              )
            );
          });
      var c = (function(e) {
        var a, t;
        function l() {
          return e.apply(this, arguments) || this;
        }
        return (
          (t = e),
          ((a = l).prototype = Object.create(t.prototype)),
          (a.prototype.constructor = a),
          (a.__proto__ = t),
          (l.prototype.render = function() {
            var e = this.props.children;
            return n.a.createElement(
              "div",
              { id: "wrapper" },
              e,
              n.a.createElement(r, null)
            );
          }),
          l
        );
      })(n.a.Component);
      a.a = c;
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-1e7e8dfb61fa3e36510d.js.map
