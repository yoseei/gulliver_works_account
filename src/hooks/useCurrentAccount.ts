/**
 * 認証とログイン中のユーザーを管理するHook
 * **/

import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { APIHost } from "../utilities/constants";
import { Account } from "../data/account/index";
import { HttpClient } from "../utilities/axiosInstance";
import { UnauthorizedError } from "../utilities/errors";
import { localHostURL } from "./localHostURL";

const accountState = atom<Account | undefined>({
  key: "account",
  default: undefined,
});

export function useCurrentAccount() {
  const [account, setAccount] = useRecoilState(accountState);
  const token = localStorage.getItem("GULLIVER_WORKS_AUTH_TOKEN");

  useEffect(() => {
    if (!token) return;

    // const [_head, encodedPayload, _sig] = token.split(".");
    // const payload = JSON.parse(atob(encodedPayload));
    // const accountId = payload.sub;
    // if (typeof accountId !== "string")
    //   throw new UnauthorizedError("不正なtokenです");

    const fetchAccount = async () => {
      try {
        const res = await HttpClient.request<Account>({
          method: "GET",
          url: `${localHostURL}/accounts?_expand=employees`,
        });
        setAccount(res.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchAccount();
  }, [token]);

  return { isLoggedIn: !!token, account, setAccount };
}
