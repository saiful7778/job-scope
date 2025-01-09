import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "@/lib/utils/localstorage";
import { RootState } from "@/redux/store";

export type Theme = "dark" | "light" | "system";

const storageKey = "theme";

interface ThemeOptions {
  theme: Theme;
}

const initialState: ThemeOptions = {
  theme: getItem(storageKey) || ("system" as Theme),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<Theme>) => {
      const updatedTheme = action.payload;
      setItem(storageKey, updatedTheme);
      state.theme = updatedTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeSelector = (state: RootState) => state.theme.theme;
export default themeSlice.reducer;
