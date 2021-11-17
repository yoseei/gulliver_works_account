import { APIHost } from "../../../utilities/constants";
import { Account } from "../../../data/account/index";
import { HttpClient } from "../../../utilities/axiosInstance";

export type SignUpParams = {
  account: {
    email: string;
    password: string;
  };
};

export type SignUpPayload = {
  account: Account;
  token: string;
};

export function useEmployeeSignUpPresenter() {
  const signUp = async (data: SignUpParams) => {
    try {
      const resLocalStorage = await HttpClient.request<SignUpPayload>({
        method: "POST",
        url: `${APIHost.AUTH}/sign_up`,
        data,
      });

      localStorage.setItem(
        "GULLIVER_WORKS_AUTH_TOKEN",
        resLocalStorage.data.token
      );
      localStorage.setItem("SIGNUP_AS", "employee");
    } catch (e) {
      console.error(e);
    }
  };

  return { signUp };
}
