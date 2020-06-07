import React from "react";
import Menu from "./Menu";
import "../style.css";

const Layout = ({title = 'Title', description = 'description', className, children}) => (
  <div>
    <Menu />
    <div className = "jumbotron text-center">
      <h2>{title}</h2>
      <p className = "lead">{description}</p>
    </div>
    <div className={className}>{children}</div>
  </div>
)

export default Layout
