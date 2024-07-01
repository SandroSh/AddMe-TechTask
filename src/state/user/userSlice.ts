import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface userDataType{
  name:string;
  position:string;
  img:File | undefined;
  address:string;
  contact:{
    email:string;
    linkedin:string;
    facebook:string;
  }
}

const initialState : userDataType = {
  name: "",
  position: "",
  img: undefined,
  address: "",
  contact: {
    email: "",
    linkedin: "",
    facebook: ""
  }
}



const userSlice = createSlice({
  name:'userData',
  initialState,
  reducers:{
    createUser: (state, action:PayloadAction<userDataType>) => {
      state = {...action.payload};
    }
  }
});

export const {createUser}= userSlice.actions;
export default userSlice.reducer;