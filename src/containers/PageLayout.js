import React from "react";
import Navigation from "./Navigation";

const PageLayout = ({ children }) => (
  <div>
    <Navigation />
    {children}
  </div>
);

export default PageLayout;
