import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { getAllCourseLevelAPI } from "../../../../core/services/api/course/get-all-course-level.api";

import { CourseLevelsInterface } from "../../../../types/course-levels";

import { DeleteFilterState } from "../../../common/DeleteFilterState";
import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { RadioGroup } from "../../../common/RadioGroup";
import { toast } from "../../../common/toast";
import { FilterAccordion } from "../FilterAccordion";

interface LevelFilterProps {
  setCourseLevel: Dispatch<SetStateAction<number | undefined>>;
}

const LevelFilter = ({ setCourseLevel }: LevelFilterProps) => {
  const [courseLevels, setCourseLevels] = useState<CourseLevelsInterface[]>();
  const [isValueChanged, setIsValueChanged] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);

  const handleDeleteValueChange = () => {
    setCourseLevel(undefined);
    setCourseLevels([]);
    setRefetch((prev) => !prev);
    setIsValueChanged(false);
  };

  const handleCourseLevelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCourseLevel(+e.target.value);

    setIsValueChanged(true);
  };

  useEffect(() => {
    const fetchCourseLevels = async () => {
      try {
        const getCourseLevels = await getAllCourseLevelAPI();

        setCourseLevels(getCourseLevels);
      } catch (error) {
        toast.error("مشکلی در دریافت سطوح دوره ها به وجود آمد !");
      }
    };

    fetchCourseLevels();
  }, [refetch]);

  return (
    <FilterAccordion title="سطح دوره" isOpen>
      <DeleteFilterState
        handleDeleteValueChange={handleDeleteValueChange}
        isValueChanged={isValueChanged}
      />
      <RadioGroup name="courseLevelGroup">
        {courseLevels &&
          courseLevels?.map((level) => (
            <FilterCheckbox
              type="radio"
              key={level.id}
              label={level.levelName}
              value={level.id}
              onChange={handleCourseLevelChange}
            />
          ))}
      </RadioGroup>
    </FilterAccordion>
  );
};

export { LevelFilter };
