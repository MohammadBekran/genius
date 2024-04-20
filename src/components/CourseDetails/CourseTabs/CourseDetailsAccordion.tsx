import { CourseLessonType } from "../../../types/course-lessons";

import { Accordion } from "../../common/Accordion";
import { AccordionSummary } from "../../common/Accordion/AccordionSummary";
import { AccordionDetails } from "../../common/Accordion/AccordionDetails";

import addIcon from "../../../assets/images/CourseDetails/Icons/add.svg";
import minusIcon from "../../../assets/images/CourseDetails/Icons/minus.svg";
import clockWhiteIcon from "../../../assets/images/CourseDetails/Icons/clock-white.svg";
import clockDarkIcon from "../../../assets/images/CourseDetails/Icons/clock-dark.svg";
import importIcon from "../../../assets/images/CourseDetails/Icons/import.svg";

interface CourseDetailsAccordionProps {
  lesson: CourseLessonType;
}

const CourseDetailsAccordion = ({ lesson }: CourseDetailsAccordionProps) => {
  return (
    <Accordion
      key={lesson.id}
      defaultExpanded={lesson.isOpen}
      classes={{
        root: "flex flex-col justify-center",
      }}
    >
      <AccordionSummary
        expandIcon={
          <div>
            <img src={addIcon} />
            <img src={minusIcon} className="hidden" />
          </div>
        }
        classes={{
          root: "!bg-primary !text-white !rounded-[12px] !font-[400] !min-h-[56px] !h-[56px] ",
          expandIconWrapper: "absolute top-[7px] right-2",
          content: "px-4",
        }}
      >
        <div className="w-full flex justify-between items-center">
          <div>{lesson.title}</div>
          <div className="flex gap-2">
            <span className="mt-1">{lesson.hour}</span>
            <img src={clockWhiteIcon} />
          </div>
        </div>
      </AccordionSummary>
      {lesson.items.map((lessonItem) => (
        <AccordionDetails key={lessonItem.id}>
          <div className="bg-courseDetailsAccordion mt-3 h-[56px] rounded-[12px] flex justify-between items-center px-4">
            <div>
              <div className="flex gap-2 items-center">
                <span className="pt-1 w-[24px] h-[24px] rounded-full bg-primary text-white flex justify-center items-center">
                  <span>{lessonItem.id}</span>
                </span>
                <span className="mt-1 font-[500] text-text1">
                  {lessonItem.title}
                </span>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex gap-1 items-center">
                <span className="font-[400] text-text2 mt-1">
                  {lessonItem.hour}
                </span>
                <img src={clockDarkIcon} />
              </div>
              <button className="w-[32px] h-[32px] bg-primary flex justify-center items-center rounded-[12px]">
                <img src={importIcon} />
              </button>
            </div>
          </div>
        </AccordionDetails>
      ))}
    </Accordion>
  );
};

export { CourseDetailsAccordion };
