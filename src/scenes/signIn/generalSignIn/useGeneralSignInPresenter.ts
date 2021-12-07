import { useCurrentAccount } from "../../../hooks/useCurrentAccount";
import { AccountType } from "../../../data/account/index";
import { HttpClient } from "../../../utilities/axiosInstance";
import { APIHost } from "../../../utilities/constants";

export type SignInParams = {
  account: {
    email: string;
    password: string;
  };
};

export type SignInPayload = {
  account: AccountType;
  token: string;
};

export function useSignInPresenter() {
  const { setAccount } = useCurrentAccount();
  const signIn = async (data: SignInParams) => {
    try {
      const res = await HttpClient.request<SignInPayload>({
        method: "POST",
        url: `${APIHost.AUTH}/sign_in`,
        data,
      });
      localStorage.setItem("GULLIVER_WORKS_AUTH_TOKEN", "1");
      localStorage.setItem("LOGIN_AS", "general");
      setAccount(res.data.account);
    } catch (e) {
      console.error(e);
    }
  };

  return { signIn };
}
