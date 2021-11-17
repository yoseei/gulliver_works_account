import { useCurrentEmployee } from "../../../hooks/useCurrentEmployee";
import { Account } from "../../../data/account/index";
import { HttpClient } from "../../../utilities/axiosInstance";
import { APIHost } from "../../../utilities/constants";

export type SignInParams = {
  account: {
    email: string;
    password: string;
  };
};

export type SignInPayload = {
  account: Account;
  token: string;
};

export function useEmployeeSignInPresenter() {
  const signIn = async (data: SignInParams) => {
    try {
      await HttpClient.request<SignInPayload>({
        method: "POST",
        url: `${APIHost.ENTERPRISE_AUTH}/sign_in`,
        data,
      });

      localStorage.setItem("GULLIVER_WORKS_ENTERPRISE_AUTH_TOKEN", "1");
      localStorage.setItem("LOGIN_AS", "employee");
    } catch (e) {
      console.error(e);
    }
  };

  return { signIn };
}
