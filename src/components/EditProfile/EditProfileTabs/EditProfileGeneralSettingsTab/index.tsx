import { CustomTabPanel } from "../../../common/CustomTabPanel";
import { AddProfileImageForm } from "./AddProfileImageForm";
import { EditProfileGeneralForm } from "./EditProfileGeneralForm";

import blankThumbnail from "../../../../assets/images/Courses/blank-thumbnail.jpg";

interface EditProfileGeneralSettingsTabProps {
  value: number;
}

const EditProfileGeneralSettingsTab = ({
  value,
}: EditProfileGeneralSettingsTabProps) => {
  return (
    <CustomTabPanel value={value} index={0} className="w-full">
      <div className="editProfileUploadImageSection">
        <div className="editProfileImageBox">
          <img src={blankThumbnail} className="editProfileImage" />
          <div className="editProfileUploadImageIconWrapper">
            <AddProfileImageForm />
          </div>
        </div>
        <span className="editProfileUploadImageText">ویرایش تصویر</span>
      </div>
      <EditProfileGeneralForm />
    </CustomTabPanel>
  );
};

export { EditProfileGeneralSettingsTab };
