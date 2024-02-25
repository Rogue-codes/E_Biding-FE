export interface ISidebar {
  label: string;
  link: string;
  icon: JSX.Element;
  iconInactive: JSX.Element;
}

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  id: string;
}

export interface IGetAllClientData {
  data: IClient[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface IClient {
  _id: string;
  RcNumber: string;
  alternatePhoneNumber: string;
  cacDoc: string;
  companyAddress: string;
  companyName: string;
  email: string;
  isVerified: boolean;
  name: string;
  phoneNumber: string;
  postalCode: string;
  status: string;
}
