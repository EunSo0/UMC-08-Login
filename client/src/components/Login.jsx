import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice.js";
import axios from "axios";

export default function Login() {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pw, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const LoginFunc = (e) => {
    e.preventDefault();
    setMsg("Loading");

    let data = {
      id,
      pw,
    };

    axios.post("http://localhost:8000/user/login", data).then((res) => {
      setLoading(false);
      setTimeout(() => setMsg(""), 1500);
      const code = res.data.code;
      if (code === 400) {
        alert("비어있는 내용입니다.");
      } else if (code === 401) {
        alert("존재하지 않는 ID입니다.");
      } else if (code === 402) {
        alert("비밀번호가 일치하지 않습니다.");
      } else {
        localStorage.setItem("token", res.data.result.AccessToken);
        localStorage.setItem("userId", res.data.result.userId);

        dispatch(
          loginUser({
            result: {
              userId: res.data.result.userId,
              username: res.data.result.username,
            },
          })
        );
      }
    });
    setLoading(true);
  };

  return (
    <>
      <div>로그인</div>
      <form onSubmit={LoginFunc}>
        <input
          type="text"
          placeholder="아이디"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} type="submit">
          로그인
        </button>
        <div>{msg}</div>
      </form>
    </>
  );
}
