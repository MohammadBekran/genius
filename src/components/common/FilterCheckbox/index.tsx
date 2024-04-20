import { Checkbox } from "../CheckBox";
import { FormGroup } from "../FormGroup";

import checkboxIcon from "../../../assets/images/Courses/Filter/checkbox.svg";
import checkedIcon from "../../../assets/images/Courses/Filter/checkbox-checked.png";
import { FormControlLabel } from "@mui/material";
import React from "react";

interface FilterCheckboxProps {
  label: string;
  className?: string;
  isChecked?: boolean;
}

const FilterCheckbox = ({
  label,
  className,
  isChecked,
}: FilterCheckboxProps) => {
  return (
    <div className={className}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              icon={<img src={checkboxIcon} />}
              checkedIcon={
                <div className="bg-primary rounded-[8px]">
                  <img src={checkedIcon} className="w-full" />
                </div>
              }
              defaultChecked={isChecked}
            />
          }
          label={label}
        />
      </FormGroup>
    </div>
  );
};

export { FilterCheckbox };