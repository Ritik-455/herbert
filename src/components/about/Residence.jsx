import React from "react";
import Act from "./common/Act";
import { RESIDENCE_DATA } from "../../utils/helper";
import vectorEllipse from "../../assets/images/about/webp/vector.webp";

const Residence = () => {
  return (
    <div className="xl:pb-[120px] pb-20 overflow-hidden relative">
      <div className="container xl:max-w-[1188px] mx-auto">
        <Act sectionData={RESIDENCE_DATA} />
      </div>
      {/* ellipse */}
      <img
        src={vectorEllipse}
        alt="ellipse"
        className="absolute right-0 h-[300px] top-[28px]"
      />
    </div>
  );
};

export default Residence;
