import { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id?: number | undefined;
  userName?: string | undefined;
  email?: string | undefined;
}

const initialState: UserState = {
  id: undefined,
  userName: undefined,
  email: undefined,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = user.actions;
export const userSelector = (state: RootState) => state.user;
export default user.reducer;
