import { Form, Formik } from "formik";

import { useUpdateProfileInfo } from "../../../../hooks/user-panel/edit-profile/update-profile-info";
import { useProfileInfo } from "../../../../hooks/user-panel/useProfileInfo";

import { EDIT_PROFILE_GENERAL_FORM } from "../../../../core/data/edit-profile/edit-profile-general-form";
import { convertDateToPersian } from "../../../../core/utils/date-helper.utils";
import { onFormData } from "../../../../core/utils/form-data-helper.utils";
import { editProfileGeneralFormSchema } from "../../../../core/validations/edit-profile/edit-profile-general-form.validation";

import { EditProfileGeneralFormInterface } from "../../../../types/edit-profile/edit-profile-general-form";

import { FieldBox } from "../../../common/FieldBox";

const EditProfileGeneralForm = () => {
  const { data: profileInfo } = useProfileInfo();
  const updateProfileInfo = useUpdateProfileInfo();

  const formattedBirthday = convertDateToPersian(profileInfo?.birthDay!);

  const initialValues = {
    fName: profileInfo?.fName || "",
    lName: profileInfo?.lName || "",
    nationalCode: profileInfo?.nationalCode || "",
    email: profileInfo?.email || "",
    birthDay: profileInfo?.birthDay || "",
    phoneNumber: profileInfo?.phoneNumber || "",
    userAbout: profileInfo?.userAbout || "",
    homeAdderess: profileInfo?.homeAdderess || "",
    linkdinProfile: profileInfo?.linkdinProfile || "",
    telegramLink: profileInfo?.telegramLink || "",
    receiveMessageEvent: profileInfo?.receiveMessageEvent!,
    gender: profileInfo?.gender!,
  };

  const onSubmit = async (values: EditProfileGeneralFormInterface) => {
    const profileInfo = onFormData(values);

    updateProfileInfo.mutate(profileInfo);
  };

  return (
    <div className="w-full mt-12">
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={editProfileGeneralFormSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="editProfileFormFieldsWrapper">
              {EDIT_PROFILE_GENERAL_FORM.map((field) => (
                <FieldBox
                  key={field.id}
                  label={field.label}
                  type={field.type}
                  as={field.as}
                  name={field.name}
                  id={field.id}
                  className={field.className || ""}
                  wrapperClassName={field.wrapperClassName}
                  isCheckbox={field.isCheckbox}
                  isDate={field.isDate || false}
                  setFieldValue={setFieldValue}
                  dateValue={formattedBirthday}
                  options={field.options}
                />
              ))}
            </div>
            <button
              type="submit"
              className="editProfileSubmitButton mr-0 mt-2 lg:mt-1"
            >
              ثبت اطلاعات
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export { EditProfileGeneralForm };
