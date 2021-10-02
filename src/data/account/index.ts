import { Profile } from "../profile/index";

export interface Account {
  id: string;
  email: string;
  profile?: Profile;
}

export interface AccountType {
  id: 1;
  email: "test@example.com";
  email_verification_status: "unspecified";
  email_verification_token: "43a05e8a-f327-4a60-97fd-cef1f4b78420";
  last_notification_read_at: "2019-08-24";
}
