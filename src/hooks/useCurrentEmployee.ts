/**
 * ログイン中のemployeeを管理するHook
 * **/

import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { Account } from "../data/account";
import { HttpClient } from "../utilities/axiosInstance";
import { localHostURL } from "./localHostURL";

const employeeState = atom<Account | undefined>({
  key: "employee",
  default: undefined,
});

export function useCurrentEmployee() {
  const [employee, setEmployee] = useRecoilState(employeeState);
  const token = localStorage.getItem("GULLIVER_WORKS_AUTH_TOKEN");

  useEffect(() => {
    // if (!token) return;

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
        console.log(res);

        setEmployee(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchEmployee();
  }, []);
  return { isLoggedIn: !!token, employee, setEmployee };
}
