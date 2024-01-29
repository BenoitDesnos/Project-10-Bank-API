import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, saveToken } from "../../utils/tokenStorage";
import { loginUser, userProfile } from "../../services/requests";

export const fetchLogin = createAsyncThunk(
  "userAPI/fetchLogin",
  async (params) => {
    const data = await loginUser(params);
    return data;
  }
);

export const fetchProfile = createAsyncThunk(
  "userAPI/fetchProfile",
  async () => {
    const data = await userProfile();
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
  name: "user",
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
    // login cases --------------------------------------------------------------
    builder.addCase(fetchLogin.pending, (state) => {
      state.isConnecting = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.isConnecting = false;
        saveToken(action.payload.body.token);
        state.isConnected = true;
      }
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.isConnecting = false;
    });
    // Profile cases --------------------------------------------------------------
    builder.addCase(fetchProfile.pending, (state) => {
      state.isFetchingProfile = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.isFetchingProfile = false;
      state.userProfile = action.payload.body;
    });
    builder.addCase(fetchProfile.rejected, (state) => {
      state.isFetchingProfile = false;
    });
  },
});

export const { setCurrentUser, setIsConnected } = userSlice.actions;

export default userSlice.reducer;
