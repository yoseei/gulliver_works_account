/**
 * 認証とログイン中のユーザーを管理するHook
 * **/

import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { AccountType } from "../data/account/index";
import { HttpClient } from "../utilities/axiosInstance";
import { localHostURL } from "./localHostURL";

const accountState = atom<AccountType | undefined>({
  key: "account",
  default: undefined,
});

export function useCurrentAccount() {
  const [account, setAccount] = useRecoilState(accountState);
  const token = localStorage.getItem("GULLIVER_WORKS_AUTH_TOKEN");

  useEffect(() => {
    if (!token) return;

    const fetchAccount = async () => {
      try {
        const res = await HttpClient.request<AccountType>({
          method: "GET",
          url: `${localHostURL}/accounts/${token}`,
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
