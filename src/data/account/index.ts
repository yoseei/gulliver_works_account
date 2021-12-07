import { Profile } from "../profile/index";

export interface Account {
  id: string;
  email: string;
  profile?: Profile;
}

export interface AccountType {
  id: string;
  email: string;
  email_verification_status: string;
  email_verification_token: string;
  last_notification_read_at: string,
  appliedRecruitment: { id: string}
}
