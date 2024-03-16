import { useDispatch } from "react-redux";
import { addNote } from "../notes/noteSlice";

function AddNotes({ groupName, groupColor }) {
  const dispatch = useDispatch();

  dispatch(
    addNote({
      tittle: groupName,
      color: groupColor,
      createdAt: new Date(),
    })
  );
}

export default AddNotes;
