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

export function useSignInPresenter() {
  const signIn = async (data: SignInParams) => {
    try {
      const res = await HttpClient.request<SignInPayload>({
        method: "POST",
        url: `${APIHost.AUTH}/sign_in`,
        data,
      });
      console.log(res);

      localStorage.setItem("GULLIVER_WORKS_AUTH_TOKEN", res.data.token);
      localStorage.setItem("LOGIN_AS", "employee");
    } catch (e) {
      console.error(e);
    }
  };

  return { signIn };
}