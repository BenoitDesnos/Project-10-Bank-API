import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, saveToken } from "../../utils/tokenStorage";

import { loginUser } from "../../services/requests";

export const fetchUserLogin = createAsyncThunk(
  "userManagementAPI/fetchUser",
  async (params) => {
    const data = await loginUser(params);
    return data;
  }
);

const initialState = {
  isConnecting: false,
  isConnected: getToken() !== null,
  isModifyProfile: false,
  isFetchingProfile: false,
  userProfile: undefined,
};

const userSlice = createSlice({
  name: "userManagement",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.userProfile = action.payload;
    },
    setIsConnected: (state, action) => {
      state.isConnected = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUserLogin.pending, (state) => {
      state.isConnecting = true;
    });
    builder.addCase(fetchUserLogin.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.isConnecting = false;
        saveToken(action.payload.body.token);
        state.isConnected = true;
      }
    });
    builder.addCase(fetchUserLogin.rejected, (state) => {
      state.isConnecting = false;
    });
  },
});

export const { setCurrentUser, setIsConnected } = userSlice.actions;

export default userSlice.reducer;
