import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Form, Formik } from "formik";
import { ReactElement, Ref, forwardRef, useState } from "react";
import AuthCode from "react-auth-code-input";

import { useLogin } from "../../hooks/auth/login/useLogin";
import { useTwoStepVerification } from "../../hooks/auth/login/useTwoStepVerification";

import { LOGIN_FORM } from "../../core/data/login/login-form";
import { loginFormSchema } from "../../core/validations/login-form.validation";

import { UserDataInterface } from "../../types/login/user-data";

import { FieldBox } from "../common/FieldBox";
import { Link } from "../common/Link";

import closeIcon from "../../assets/images/Login/close-circle.svg";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginForm = () => {
  const initialValues = { phoneOrGmail: "", password: "", rememberMe: true };

  const [userData, setUserData] = useState<UserDataInterface>(initialValues);
  const [isTwoStepVerification, setIsTwoStepVerification] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");

  const loginUser = useLogin();
  const twoStepVerification = useTwoStepVerification();

  const onSubmit = async (values: UserDataInterface) => {
    loginUser.mutate(values, {
      onSuccess: (data) => {
        if (data.success && !data.token) {
          setIsTwoStepVerification(true);
          setUserData(values);
        }
      },
    });
  };

  const handleTwoStepVerificationSubmit = () => {
    twoStepVerification.mutate({
      ...userData,
      verifyCode,
    });
  };

  const handleClose = () => {
    setIsTwoStepVerification(false);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={loginFormSchema}
        >
          <Form>
            <div className="authFormWrapper">
              {LOGIN_FORM.map((field) => (
                <FieldBox
                  key={field.id}
                  type={field.type}
                  label={field.label}
                  name={field.name}
                  id={field.id}
                  placeholder={field.placeholder}
                  className={field.className!}
                  wrapperClassName={field.wrapperClassName}
                  isPassword={field.isPassword}
                  isCheckbox={field.isCheckbox}
                  isLogin
                />
              ))}
              <button className="loginSubmitButton" type="submit">
                ورود
              </button>
              <h5 className="doYouHaveAnyAccountOrDoNotHaveAccountOrForgetPasswordText mt-1">
                حساب کاربری ندارید؟{" "}
                <Link
                  to="/register"
                  className="doYouHaveAnyAccountOrDoNotHaveAccountLink"
                >
                  ثبت نام{" "}
                </Link>
              </h5>
              <span className="doYouHaveAnyAccountOrDoNotHaveAccountOrForgetPasswordText -mt-1">
                یا
              </span>
              <h5 className="doYouHaveAnyAccountOrDoNotHaveAccountOrForgetPasswordText -mt-1">
                رمز عبور خود را فراموش کرده اید ؟{" "}
                <Link to="/forget-password" className="text-primaryColor">
                  تغییر
                </Link>
              </h5>
            </div>
          </Form>
        </Formik>
      </div>
      <Dialog
        open={isTwoStepVerification}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        classes={{
          paper: "w-[420px] rounded-[24px] dark:bg-darkBackground",
        }}
      >
        <DialogContent classes={{ root: "px-10 py-8" }}>
          <div className="flex justify-between items-center">
            <h3 className="text-[32px] font-[700] text-text1 dark:text-darkText">
              تایید دو مرحله ای
            </h3>
            <div
              className="w-[48px] h-[48px] bg-twoStepVerificationCloseButton dark:bg-gray-800 rounded-[16px] flex justify-center items-center cursor-pointer"
              onClick={handleClose}
            >
              <img src={closeIcon} />
            </div>
          </div>
          <div className="flex flex-col items-center mt-10">
            <span className="text-text1 dark:text-darkText text-start font-[500] mb-4">
              کد تایید به <span className="text-primaryColor"> شماره شما </span>
              ارسال شد
            </span>
            <AuthCode
              onChange={(e) => setVerifyCode(e)}
              inputClassName="authPhoneNumberInput dark:text-darkText"
              containerClassName="authPhoneNumberInputContainer"
              length={5}
            />
            <button
              disabled={!verifyCode}
              onClick={handleTwoStepVerificationSubmit}
              className={`loginSubmitButton w-[208px] h-[56px] rounded-[80px] mt-7 ${
                !verifyCode && "cursor-not-allowed opacity-65"
              }`}
            >
              تایید کد
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { LoginForm };
