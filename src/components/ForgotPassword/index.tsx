import { useState } from "react";

import { Logo } from "../Header/Logo";
import { SocialMedia } from "../common/SocialMedia";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { FormStep } from "../common/FormStep";

const ForgotPassword = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="authPageWrapper">
      <div className="authPageSidebar h-[570px]">
        <div>
          <div className="pr-7">
            <Logo isFilter isDark />
          </div>
          <div className="flex flex-col gap-6 mt-3">
            <FormStep
              title="ایمیل"
              description="در این مرحله باید ایمیل خود را وارد نمایید."
              step={1}
              currentStep={currentStep}
            />
            <FormStep
              title="رمز عبور جدید"
              description="در این مرحله باید رمز عبور جدید خود را وارد نمایید."
              step={2}
              currentStep={currentStep}
            />
          </div>
        </div>
        <SocialMedia />
      </div>
      <div className="lg:w-[63%] pt-10 h-[570px]">
        <div className="flex flex-col items-center px-5">
          <h1 className="authToSiteText">بازگردانی رمز عبور</h1>
          <p className="authToSiteDescription">
            لطفا ایمیل خود را وارد نمایید.
          </p>
          <ForgotPasswordForm
            currentStep={currentStep}
            setCurrentValue={setCurrentStep}
          />
        </div>
      </div>
    </div>
  );
};

export { ForgotPassword };