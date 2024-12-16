import { createSlice ,nanoid  } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'note',
  initialState: {
    notes: [], 
  },

  reducers: {
    addNote: (state, action) => {
      state.notes.push(
        {
          id:nanoid(),
          content:action.payload,
        });
    },

    deleteNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },

    updateNote: (state, action) =>{
       state.notes = state.notes.map(note =>
         note.id === action.payload.id ?
         {
          ...note, content:action.payload.newContent } 
          //existing id rakhxa note ma and new updated is added onnewcontent.

          :
          note 
          // else keep the original one
         
       )

    }
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
