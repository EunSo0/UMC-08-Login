import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    id: "",
    isLoading: false,
    isLogin: null,
  },
  reducers: {
    // login 성공시
    loginUser: (state, action) => {
      state.name = action.payload.result.username;
      state.id = action.payload.result.userId;
      return state;
    },
    // login 실패시
    clearUser: (state) => {
      state.name = "";
      state.id = "";
      return state;
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
