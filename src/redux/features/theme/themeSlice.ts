import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "@/lib/utils/localStorage";
import { RootState } from "@/redux/store";
import { themeStoreName } from "@/lib/staticData";

export type Theme = "dark" | "light" | "system";

interface ThemeOptions {
  theme: Theme;
}

const initialState: ThemeOptions = {
  theme: getItem<Theme>(themeStoreName) || "system",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<Theme>) => {
      const updatedTheme = action.payload;
      setItem(themeStoreName, updatedTheme);
      state.theme = updatedTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeSelector = (state: RootState) => state.theme;
export default themeSlice.reducer;
