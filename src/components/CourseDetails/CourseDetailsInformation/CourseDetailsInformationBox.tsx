import React from "react";

interface CourseDetailsInformationBoxProps {
  imageURL: string;
  label: string;
  value: string;
}

const CourseDetailsInformationBox = ({
  imageURL,
  label,
  value,
}: CourseDetailsInformationBoxProps) => {
  return (
    <div className="border-b border-b-courseDetailsInformationBox mx-auto py-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full bg-primary flex justify-center items-center">
            <img src={imageURL} />
          </div>
          <span className="font-[500] text-text2">{label}</span>
        </div>
        <span className="font-[700] text-text1">{value}</span>
      </div>
    </div>
  );
};

export { CourseDetailsInformationBox };