import React from "react";
import SourcesHero from "../about/SourcesHero";
import Code from "../about/Code";
import { Regulation } from "../about/Regulation";
import HandBook from "../about/HandBook";
import Act from "../about/common/Act";
import { RESIDENCE_DATA, VISA_DATA } from "../../utils/helper";
import Visa from "../about/Visa";

const About = () => {
  return (
    <>
      <SourcesHero />
      <Act sectionData={RESIDENCE_DATA} />
      <Code />
      <Regulation />
      <Visa/>
      <Act sectionData={VISA_DATA} />
      <HandBook />
    </>
  );
};

export default About;
