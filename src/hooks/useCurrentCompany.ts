/**
 * ログイン中のcompanyを管理するHook
 * **/

import { useEffect } from "react";
import { APIHost } from "../utilities/constants";
import { atom, useRecoilState } from "recoil";
import { CompanyDataType } from "data/company";
import { HttpClient } from "../utilities/axiosInstance";
import { UnauthorizedError } from "../utilities/errors";
import { localHostURL } from "./localHostURL";
import { Account } from "data/account";

const companyState = atom<Account | undefined>({
  key: "company",
  default: undefined,
});

export function useCurrentCompany() {
  const [company, setCompany] = useRecoilState(companyState);
  const token = localStorage.getItem("GULLIVER_WORKS_AUTH_TOKEN");
  const employee = localStorage.getItem("LOGIN_AS");

  useEffect(() => {
    if (!token) return;

    const [_head, encodedPayload, _sig] = token.split(".");
    const payload = JSON.parse(atob(encodedPayload));
    const companyId = payload.sub;
    if (typeof companyId !== "string")
      throw new UnauthorizedError("不正なtokenです");

    const fetchCompany = async () => {
      try {
        const res = await HttpClient.request<Account>({
          method: "GET",
          url: `${APIHost.APP}/accounts/${companyId}`,
        });
        setCompany(res.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCompany();
  }, []);
  return { isLoggedIn: !!token, company, setCompany };
}
