import { ErrorMessage as FormikErrorMessage } from "formik";

interface ErrorMessageProps {
  name: string;
  className?: string;
}

const ErrorMessage = ({ name, className }: ErrorMessageProps) => {
  return (
    <div className="my-2">
      <FormikErrorMessage
        name={name}
        component="p"
        className={`errorMessage ${className || ""}`}
      />
    </div>
  );
};

export { ErrorMessage };
