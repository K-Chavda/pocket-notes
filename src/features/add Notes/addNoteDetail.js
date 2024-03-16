import { useDispatch } from "react-redux";
import { addNoteDetails } from "../notes/noteSlice";

function AddNoteDetails({ noteId, noteText, createdDate, createdTime }) {
  const dispatch = useDispatch();

  dispatch(
    addNoteDetails({
      noteId: noteId,
      noteText: noteText,
      createdDate: createdDate,
      createdTime: createdTime,
    })
  );
}

export default AddNoteDetails;
