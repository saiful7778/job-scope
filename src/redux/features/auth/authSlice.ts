import { getCookie, setCookie } from "@/lib/utils/cookie";
import { getItem, setItem } from "@/lib/utils/sessionStorage";
import { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface TokenState {
  accessToken?: string | undefined;
  refreshToken?: string | undefined;
}

const initialState: TokenState = {
  accessToken: getItem<string>("access"),
  refreshToken: getCookie("refresh"),
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeToken: (state, action: PayloadAction<TokenState>) => {
      const updateAccessToken = action.payload.accessToken;
      const updateRefreshToken = action.payload.refreshToken;

      setItem("access", updateAccessToken);
      setCookie("refresh", updateRefreshToken, 1);

      state.accessToken = updateAccessToken;
      state.refreshToken = updateRefreshToken;
    },
  },
});

export const { storeToken } = auth.actions;
export const authSelector = (state: RootState) => state.auth;
export default auth.reducer;
