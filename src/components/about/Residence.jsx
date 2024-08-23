import React from "react";
import Act from "./common/Act";
import { RESIDENCE_DATA } from "../../utils/helper";

const Residence = () => {
  return (
    <div className="xl:pb-[120px] pb-20">
      <div className="container xl:max-w-[1188px] mx-auto">
        <Act sectionData={RESIDENCE_DATA} />
      </div>
    </div>
  );
};

export default Residence;
