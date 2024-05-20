import { FormControlLabel } from "../FormControlLabel";
import { Checkbox } from "../CheckBox";
import { Radio } from "../Radio";
import { FormGroup } from "../FormGroup";

import checkboxIcon from "../../../assets/images/Courses/Filter/checkbox.svg";
import checkedIcon from "../../../assets/images/Courses/Filter/checked.png";

interface FilterCheckboxProps {
  type?: string;
  label: string;
  className?: string;
  isChecked?: boolean;
  value: string | number;
  onChange: (e: React.FormEvent<HTMLDivElement>) => void;
}

const FilterCheckbox = ({
  type,
  label,
  className,
  isChecked,
  value,
  onChange,
}: FilterCheckboxProps) => {
  return (
    <div className={className}>
      <FormGroup>
        <FormControlLabel
          control={
            type == "radio" ? (
              <Radio
                icon={<img src={checkboxIcon} />}
                checkedIcon={
                  <div>
                    <img src={checkedIcon} className="w-full" />
                  </div>
                }
                defaultChecked={isChecked}
                value={value}
                onChange={onChange}
              />
            ) : (
              <Checkbox
                icon={<img src={checkboxIcon} />}
                checkedIcon={
                  <div>
                    <img src={checkedIcon} className="w-full" />
                  </div>
                }
                defaultChecked={isChecked}
                value={value}
                onChange={onChange}
              />
            )
          }
          label={label}
        />
      </FormGroup>
    </div>
  );
};

export { FilterCheckbox };
