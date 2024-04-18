import PropTypes from "prop-types";

import { CourseItemDetailItem } from "./CourseItemDetailItem";

import teacherIcon from "../../../assets/images/Courses/Icons/teacher.svg";
import studentsIcon from "../../../assets/images/Courses/Icons/profile-user.svg";
import lessonsIcon from "../../../assets/images/Courses/Icons/note.svg";
import clockIcon from "../../../assets/images/Courses/Icons/clock.svg";
import calenderIcon from "../../../assets/images/Courses/Icons/calendar.svg";

const CourseItemDetails = ({ course }) => {
  return (
    <div className="courseItemStyleTwoDetailsWrapper">
      <CourseItemDetailItem imageURL={teacherIcon} label={course.teacherName} />
      <CourseItemDetailItem
        imageURL={studentsIcon}
        label={`${course.studentsCount} دانش‌آموز`}
      />
      <CourseItemDetailItem
        imageURL={lessonsIcon}
        label={`${course.lessonsCount} درس`}
      />
      <CourseItemDetailItem
        imageURL={clockIcon}
        label={`${course.hour} ساعت`}
      />
      <CourseItemDetailItem imageURL={calenderIcon} label={course.createdAt} />
    </div>
  );
};

CourseItemDetails.propTypes = {
  course: PropTypes.array,
};

export { CourseItemDetails };
