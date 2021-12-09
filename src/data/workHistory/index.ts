export type WorkHistoriesType = {
  id?: string;
  isEmployed?: string;
  occupation?: string;
  industry?: {
    id: string;
    name: string;
  };
  position?: string;
  annualIncome?: number;
  managementExperience?: number;
  jobSummary?: string;
  sinceDate?: string;
  untilDate?: string;
  name: string;
  account_id: string;
}
