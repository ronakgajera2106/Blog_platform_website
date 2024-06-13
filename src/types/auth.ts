export type SigninValuestypes = {
  emailaddress: string;
  password: string;
  checked: boolean;
};

export type SigninResponse = {
  id: string;
  data: {
    firstname: string;
    lastname: string;
    emailaddress: string;
    phnnumber: number;
    token: string;
  };
};

export type SignUpValuestypes = {
  firstname: string;
  lastname: string;
  phnnumber: string;
  emailaddress: string;
  password: string;
};
