export interface AuthState {
  // Isdark: boolean;
  user: any | null;
  token: string | null;
  // locale: "en" | "es";
  // registerData: any | null;
  setUser: (user: any | null) => void;
  // setRegisterData: (data: any | null) => void;
  // setLocale: (ln: any | null) => void;
  // setIsdark: (dark: any | null) => void;
  setToken: (token: string | null | undefined) => void;
  // removeAll: () => void;
}
