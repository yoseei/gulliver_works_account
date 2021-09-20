export interface WorkHistoryType {
  id?: string;
  isEmployed?: string;
  occupation?: {
    id: string;
    name: string;
  };
  industry?: {
    id: string;
    name: string;
  };
  position: string;
  annualIncome?: number;
  managementExperience?: number;
  jobSummary: string;
  sinceDate: string;
  untilDate: string;
  name: string;
}
