import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notesObject: [
    {
      id: 1,
      title: "Hello World",
      color: "bg-red-900",
      createdAt: new Date(),
      notes: [
        {
          id: 1,
          noteText: "Hello World",
          createdAt: new Date(),
        },
        {
          id: 2,
          noteText: "Another note text",
          createdAt: new Date(),
        },
      ],
    },
  ],
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: nanoid(),
        title: action.payload.title,
        color: action.payload.color,
        createdAt: action.payload.createdAt,
        notes: {
          id: nanoid(),
          noteText: action.payload.noteText,
          createdAt: action.payload.createdAt,
        },
      };
      state.notesObject.push(newNote);
    },
  },
});

export const { addTodo } = noteSlice.actions;

export default noteSlice.reducer;
