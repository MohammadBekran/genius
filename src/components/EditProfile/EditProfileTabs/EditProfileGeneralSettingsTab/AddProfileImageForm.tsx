import { ChangeEvent } from "react";
import { CameraAltOutlined } from "@mui/icons-material";

import { useAddProfileImage } from "../../../../hooks/user-panel/useAddProfileImage";
import { useTimeOut } from "../../../../hooks/useTimeOut";

import { useUserProfile } from "../../../../redux/user-profile";
import { useSelectProfileImage } from "../../../../hooks/user-panel/useSelectProfileImage";

const AddProfileImageForm = () => {
  const addProfileImage = useAddProfileImage();
  const userProfile = useUserProfile();
  const selectProfileImage = useSelectProfileImage();
  const timeOut = useTimeOut();

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageData = new FormData();

    if (e.target.files) imageData.append("formFile", e.target.files[0]);

    addProfileImage.mutate(imageData);

    timeOut(() => {
      const profileImageFormData = new FormData();

      profileImageFormData.append(
        "imageId",
        userProfile.userImage[userProfile.userImage.length - 1].id
      );

      selectProfileImage.mutate(profileImageFormData);
    }, 2000);
  };

  return (
    <>
      <input
        type="file"
        id="image"
        onChange={handleFileInputChange}
        className="hidden"
      />
      <label htmlFor="image">
        <CameraAltOutlined className="text-white" />
      </label>
    </>
  );
};

export { AddProfileImageForm };
