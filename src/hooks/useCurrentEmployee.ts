/**
 * ログイン中のemployeeを管理するHook
 * **/

import { CompanyDataType } from "data/company";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { Account } from "../data/account";
import { HttpClient } from "../utilities/axiosInstance";
import { localHostURL } from "./localHostURL";

const employeeState = atom<Account | undefined>({
  key: "employee",
  default: undefined,
});
const companyState = atom<CompanyDataType | undefined>({
  key: "company",
  default: undefined,
});

export function useCurrentEmployee() {
  const [employee, setEmployee] = useRecoilState(employeeState);
  const [company, setCompany] = useRecoilState(companyState);
  const token = localStorage.getItem("GULLIVER_WORKS_ENTERPRISE_AUTH_TOKEN");

  useEffect(() => {
    if (!token) return;

    // const [_head, encodedPayload, _sig] = token.split(".");
    // const payload = JSON.parse(atob(encodedPayload));
    // const employeeId = payload.sub;
    // if (typeof employeeId !== "string")
    //   throw new UnauthorizedError("不正なtokenです");

    const fetchEmployee = async () => {
      try {
        const res = await HttpClient.request<Account>({
          method: "GET",
          url: `${localHostURL}/employees/${token}`,
        });

        setEmployee(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchEmployee();
  }, [token]);
  return { isLoggedIn: !!token, employee, setEmployee, company, setCompany };
}
