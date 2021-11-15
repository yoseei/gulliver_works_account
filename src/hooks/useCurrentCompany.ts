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
  const employee = localStorage.getItem("LOGIN_AS");

  useEffect(() => {
    console.log(employee);

    if (employee !== "employee") return;

    const [_head, encodedPayload, _sig] = employee.split(".");
    const payload = JSON.parse(atob(encodedPayload));
    const companyId = payload.sub;
    if (companyId !== "employee")
      throw new UnauthorizedError("不正なemployeeです");

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
  return { isLoggedIn: !!employee, company, setCompany };
}
