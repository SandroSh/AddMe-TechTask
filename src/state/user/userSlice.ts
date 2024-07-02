import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface userDataType {
  name: string;
  position: string;
  img: string | ArrayBuffer | null;
  address: string;
  email: string;
  linkedin: string;
  portfolio: string;
  github: string;
}

export const initialState: userDataType = {
  name: "",
  position: "",
  img: null,
  address: "",
  email: "",
  linkedin: "",
  portfolio: "",
  github: "",
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<userDataType>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
