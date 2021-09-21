import { Profile } from "./profile/index";

export interface Account {
  id: string;
  email: string;
  profile?: Profile;
}
