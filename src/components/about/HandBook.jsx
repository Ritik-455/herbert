import React from "react";
import { VISA_DATA } from "../../utils/helper";
import PrimaryParagraph from "../../common/PrimaryParagraph";
import Act from "./common/Act";

const HandBook = () => {
  return (
    <div className="xl:py-[120px] lg:pb-20 pb-16 pt-20">
      <div className="container xl:max-w-[1188px] mx-auto">
        <Act sectionData={VISA_DATA} />
        <div className="mt-20 xl:mt-16 border rounded-lg bg-white border-light_grey md:p-6 p-4">
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
