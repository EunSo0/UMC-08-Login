import React from "react";
import { useSelector } from "react-redux";

import LoginComponent from "./components/Login";
import MyPage from "./components/MyPage";

export default function App() {
  const user = useSelector((state) => state.user);

  return <>{user.id !== "" ? <MyPage /> : <LoginComponent />}</>;
}
