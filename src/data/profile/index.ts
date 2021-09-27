export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
}

export type ProfileType = {
  id: string;
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
  gender: string;
  phone: string;
  postalCode: string;
  address: string;
  dateOfBirth: string;
  biography: string;
};

// export type ProfileModalType = {
//   open: any;
//   onClose: any;
// };
