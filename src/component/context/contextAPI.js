import React, { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../API/Api";
const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [tasks, SetTask] = useState([]);
  const [search, setSearch] = useState({});
  const [curentName, setCurentName] = useState("");
  const values = {
    data,
    setData,
    tasks,
    SetTask,
    curentName,
    setCurentName,
    search,
    setSearch,
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const datas = await getUser();
    setData(datas);
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") throw new Error("Error");
  return context;
}
export { AuthContextProvider, useAuth };
