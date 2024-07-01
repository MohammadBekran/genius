import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { isUserLoginChange } from "../../../redux/user-login";

import { setItem } from "../../../core/services/common/storage.services";
import http from "../../../core/services/interceptor";

import { UserDataInterface } from "../../../types/login/user-data";

const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (user: UserDataInterface) =>
      await http.post("/Sign/Login", user).then((res) => res.data),
    onMutate: () => toast.loading("در حال ورود به سایت ..."),
    onSuccess: (user) => {
      if (user.success) {
        toast.dismiss();
        if (user.token) {
          toast.success("در حال انتقال به پنل کاربری ...");
          setItem("token", user.token);
          dispatch(isUserLoginChange(true));
          window.location.pathname = "/dashboard";
        }
      } else {
        toast.dismiss();
        toast.error("نام کاربری یا رمز عبور شما نادرست می باشد");
      }
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در فرایند ورود به وجود آمد !");
    },
  });
};

export { useLogin };
