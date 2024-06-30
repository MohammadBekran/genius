import { Form, Formik } from "formik";

import { useEditSecurityInfo } from "../../../../hooks/user-panel/useEditSecurityInfo";
import { useSecurityInfo } from "../../../../hooks/user-panel/useSecurityInfo";

import { editProfileSecurityFormSchema } from "../../../../core/validations/edit-profile/edit-profile-security-form.validation";

import { EditSecurityInfo } from "../../../../types/edit-security-info";

import { FieldBox } from "../../../common/FieldBox";

const EditProfileSecurityForm = () => {
  const { data } = useSecurityInfo();
  const editSecurityInfo = useEditSecurityInfo();

  const onSubmit = (e: EditSecurityInfo) => {
    const checkTwoStepAuth = e.twoStepAuth === "true" ? true : false;
    editSecurityInfo.mutate({
      twoStepAuth: checkTwoStepAuth,
      recoveryEmail: e.recoveryEmail,
      baseUrl: e.baseUrl,
    });
  };

  return (
    <Formik
      initialValues={{
        twoStepAuth: data?.twoStepAuth || true,
        recoveryEmail: data?.recoveryEmail || "",
        baseUrl: data?.baseUrl || "",
      }}
      validationSchema={editProfileSecurityFormSchema}
      enableReinitialize={true}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="flex justify-center gap-6 mt-4">
          <FieldBox
            label="ایمیل بازگردانی"
            id="recoveryEmail"
            name="recoveryEmail"
            type="text"
            wrapperClassName="mt-1"
            className="editProfileFormInput"
          />
          <FieldBox
            label="آدرس اصلی"
            id="baseUrl"
            name="baseUrl"
            type="text"
            wrapperClassName="mt-1"
            className="editProfileFormInput"
          />
          <FieldBox
            label="تایید دو مرحله ای"
            name="twoStepAuth"
            id="twoStepAuth"
            as="select"
            wrapperClassName="editProfileGenderAndReceiveMessageEventSelectBoxWrapper"
            className="editProfileGenderAndReceiveMessageEventSelectBox"
            options={[
              {
                value: true,
                label: "فعال",
              },
              {
                value: false,
                label: "غیر فعال",
              },
            ]}
          />
        </div>
        <button type="submit" className="editProfileSubmitButton mr-5 mt-3">
          ویرایش اطلاعات
        </button>
      </Form>
    </Formik>
  );
};

export { EditProfileSecurityForm };
