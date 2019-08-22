import React from "react";

import "../assets/scss/main.scss";
import Contact from "./Contact";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div id="wrapper">
        {children}
        <Contact />
      </div>
    );
  }
}

export default Layout;
