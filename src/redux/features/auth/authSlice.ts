import { accessTokenName, refreshTokenName } from "@/lib/staticData";
import { getCookie, setCookie } from "@/lib/utils/cookie";
import { getItem, setItem, removeItem } from "@/lib/utils/sessionStorage";
import { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface TokenState {
  isLoading?: boolean | undefined;
  accessToken?: string | undefined;
  refreshToken?: string | undefined;
}

const initialState: TokenState = {
  isLoading: true,
  accessToken: getItem<string>(accessTokenName),
  refreshToken: getCookie(refreshTokenName),
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeToken: (state, action: PayloadAction<TokenState>) => {
      const updateAccessToken = action.payload.accessToken;
      const updateRefreshToken = action.payload.refreshToken;

      if (updateAccessToken) {
        setItem(accessTokenName, updateAccessToken);
        state.accessToken = updateAccessToken;
        state.isLoading = false;
      }

      if (updateRefreshToken) {
        setCookie(refreshTokenName, updateRefreshToken, 1);
        state.refreshToken = updateRefreshToken;
        state.isLoading = false;
      }
    },
    restoreLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    clearAuth: (state) => {
      removeItem(accessTokenName);
      setCookie(refreshTokenName, undefined, -1);
      state.accessToken = undefined;
      state.refreshToken = undefined;
      state.isLoading = false;
    },
  },
});

export const { storeToken, restoreLoading, clearAuth } = auth.actions;
export const authSelector = (state: RootState) => state.auth;
export default auth.reducer;
