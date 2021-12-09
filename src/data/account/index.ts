import { Profile } from "../profile/index";

export type Account = {
  id: string;
  email: string;
  profile?: Profile;
}

export type AccountType = {
  id: string;
  email: string;
  email_verification_status: string;
  email_verification_token: string;
  last_notification_read_at: string,
  appliedRecruitment: { id: string}
}
