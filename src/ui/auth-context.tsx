import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  username: string | null;
  email: string | null;
  password: string | null;
  login: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const defualtAuthContext: AuthContextType = {
  isLoggedIn: false,
  username: null,
  email: null,
  password: null,
  login: () => console.log("Login function called (default)"),
  logout: () => console.log("logout function called (default)"),
};

export const AuthContext = createContext(defualtAuthContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);

  // Fungsi untuk Login
  const login = () => {
    setIsLoggedIn(true);
    setUsername("Akbar_TS_User");
    console.log("User berhasil login!");
  };

  // const logout = () => {
  //   setIsLoggedIn(false);
  //   setUsername(null);
  //   console.log("User berhasil logout!");
  // };

  // Gabungkan semua nilai yang akan diberikan ke Provider
  const contextValue: AuthContextType = {
    isLoggedIn,
    username,
    login,
  };

  return (
    // Pastikan props 'value' sesuai dengan AuthContextType
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
