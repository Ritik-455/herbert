import React from "react";
import { VISA_DATA } from "../../utils/helper";
import PrimaryParagraph from "../../common/PrimaryParagraph";
import Act from "./common/Act";
import bottomLayerHandbook from '../../assets/images/about/png/sources-bottom-layer.png'

const HandBook = () => {
  return (
    <div className="xl:py-[120px] lg:pb-20 pb-16 pt-20 relative max-w-[1920px] mx-auto">
      <div className="absolute -bottom-[30%] left-0 pointer-events-none">
        <img src={bottomLayerHandbook} alt="bottom layer" className="w-full h-full" />
      </div>
      <div className="container xl:max-w-[1188px] mx-auto">
        <Act sectionData={VISA_DATA} />
        <div className="mt-20 xl:mt-16 border rounded-lg bg-white relative z-10 border-light_grey md:p-6 p-4">
          <PrimaryParagraph
            className="leading-6"
            text="By basing its knowledge on these official sources, Herbert provides you with accurate, up-to-date, & reliable information on German immigration processes. Our commitment to using these authoritative resources ensures that you receive guidance aligned with current German immigration laws & practices."
          />
        </div>
      </div>
    </div>
  );
};

export default HandBook;
