import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "@/lib/utils/localStorage";
import { RootState } from "@/redux/store";

export type Theme = "dark" | "light" | "system";

interface ThemeOptions {
  theme: Theme;
}

const initialState: ThemeOptions = {
  theme: getItem<Theme>("theme") || "system",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<Theme>) => {
      const updatedTheme = action.payload;
      setItem("theme", updatedTheme);
      state.theme = updatedTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeSelector = (state: RootState) => state.theme;
export default themeSlice.reducer;
