import React from "react";
import SourcesHero from "../about/SourcesHero";
import Code from "../about/Code";
import { Regulation } from "../about/Regulation";
import HandBook from "../about/HandBook";
import Act from "../about/common/Act";
import Visa from "../about/Visa";
import Residence from "../about/Residence";

const About = () => {
  return (
    <>
      <SourcesHero />
      <Residence />
      <Code />
      <Regulation />
      <Visa/>
      <Act />
      <HandBook />
    </>
  );
};

export default About;
