export type RecruitmentDataType = {
  id: string;
  accountId: string;
  title: string;
  department: string;
  occupation: {
    id: number;
    name: string;
  };
  industry: {
    id: number;
    name: string;
  };
  workPlace: {
    id: string;
    name: string;
  };
  jobDescription: string;
  workConditions: string;
  qualificationRequirement: string;
  updatedAt: string;
  advertisementNumber: number;
  businessSummary: string;
  company: {
    id: number;
    name: string;
    nameKana: string;
    headOfficeLocation: string;
    yearOfEstablishment: string;
    hpUrl: string;
    phone: string;
    capital: string;
    isListed: false;
    representative: string;
    representativeKana: string;
    netSales: number;
    numbersOfEmployees: number;
    averageAge: number;
    businessSummary: string;
    corporatePr: string;
    industries: [
      {
        id: number;
        name: string;
      }
    ];
    coverImageUrl: string;
  };
  status: string;
};
