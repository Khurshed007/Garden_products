import { createSlice } from '@reduxjs/toolkit';

const LikeSlice = createSlice({
  name: 'like',
  initialState: {
    likesData: {},
    likesCounter : 0,
    likesId : null
 
  },
  reducers: {
    addToLikes: (state, {payload}) => {
      const   {articul}  = payload
       console.log(payload, "payload")
      if (!state.likesData[articul]) {
        state.likesData[articul] = "liked";
        state.likesCounter++
      }else if(state.likesData[articul] === "liked") {
        delete state.likesData[articul]; 
        state.likesCounter--  
    }
    },
    setlikesId: (state, action) => {
      const { id } = action.payload;
       console.log(id, "SetLikesId")
        state.likesId =  id;
    },
  },
});

export const { addToLikes, deleteLikes, setlikesId } = LikeSlice.actions;
export default LikeSlice.reducer;