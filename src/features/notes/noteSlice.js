import { createSlice, nanoid } from "@reduxjs/toolkit";

// Function to load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("notesState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Function to save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.clear();
    localStorage.setItem("notesState", serializedState);
  } catch {
    // ignore write errors
  }
};

const initialState = loadState() || {
  notesObject: [], // Initialize as an empty array if no notes exist
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const noteId = nanoid();
      const newNote = {
        id: noteId,
        title: action.payload.title,
        color: action.payload.color,
        createdAt: action.payload.createdAt,
        notes: [
          {
            id: null,
            noteText: null,
            createdDate: null,
            createdTime: null,
          },
        ],
      };
      state.notesObject.push(newNote);
      saveState(state); // Save state to local storage after modification
      localStorage.setItem("selectedNoteId", noteId);
    },
    addNoteDetails: (state, action) => {
      state.notesObject.forEach((note) => {
        const noteDetails = {
          id: nanoid(),
          noteText: action.payload.noteText,
          createdDate: action.payload.createdDate,
          createdTime: action.payload.createdTime,
        };

        if (note.id === action.payload.noteId) {
          note.notes.push(noteDetails);
        }
      });
      saveState(state);
      localStorage.setItem("selectedNoteId", action.payload.noteId);
    },
  },
});

export const { addNote, addNoteDetails } = noteSlice.actions;

export default noteSlice.reducer;
