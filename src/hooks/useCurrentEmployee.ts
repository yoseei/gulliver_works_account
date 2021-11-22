/**
 * ログイン中のemployeeを管理するHook
 * **/

import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { Employee } from "../data/employee";
import { HttpClient } from "../utilities/axiosInstance";
import { localHostURL } from "./localHostURL";

const employeeState = atom<Employee | undefined>({
  key: "employee",
  default: undefined,
});

export function useCurrentEmployee() {
  const [employee, setEmployee] = useRecoilState(employeeState);
  const token = localStorage.getItem("GULLIVER_WORKS_ENTERPRISE_AUTH_TOKEN");

  useEffect(() => {
    if (!token) return;

    const fetchEmployee = async () => {
      try {
        const res = await HttpClient.request<Employee | undefined>({
          method: "GET",
          url: `${localHostURL}/employees/${token}?_embed=companies`,
        });
        setEmployee(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchEmployee();
  }, [token]);

  return { isLoggedIn: !!token, employee, setEmployee };
}
