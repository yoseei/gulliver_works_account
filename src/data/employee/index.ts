import { CompanyDataType } from "../../data/company";

export interface Employee {
  id: string | undefined;
  email: string;
  email_verification_status: string;
  email_verification_token: string;
  last_notification_read_at: string;
  companies: [
    {
      id: string | undefined;
      employeeId: string;
      name: string;
      nameKana: string;
      headOfficeLocation: string;
      yearOfEstablishment: string;
      hpUrl: string;
      phone: string;
      capital: number;
      isListed: boolean;
      representativeLast: string;
      representativeFirst: string;
      representativeKanaLast: string;
      representativeKanaFirst: string;
      netSales: string;
      numbersOfEmployees: string;
      averageAge: string;
      businessSummary: string;
      corporatePr: string;
    }
  ];
}
