import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../redux/userSlice.js";

export default function Mypage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const LogoutFunc = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    dispatch(clearUser(user));
  };

  return (
    <>
      <div>{user.name}님 안녕하세요!</div>
      <button onClick={() => LogoutFunc()}>로그아웃</button>
    </>
  );
}
