export type RecruitmentDataType = {
  id: string;
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
    year_of_establishment: string;
    hp_url: string;
    phone: string;
    capital: string;
    is_listed: false;
    representative: string;
    representative_kana: string;
    net_sales: number;
    numbers_of_employees: number;
    average_age: number;
    business_summary: string;
    corporate_pr: string;
    industries: [
      {
        id: number;
        name: string;
      }
    ];
    cover_image_url: string;
  };
  status: string;
};
