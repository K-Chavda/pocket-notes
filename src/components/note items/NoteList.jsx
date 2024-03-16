import React, { useState, useEffect } from "react";
import Styles from "./NoteList.module.css";
import { useSelector } from "react-redux";

import getInitials from "../../functions/getInitials";

function NoteList(props) {
  const notes = useSelector((state) => state.notesObject);
  const [selectedNoteId, setSelectedNoteId] = useState();

  // Capture the selectedNoteId prop from props
  const selectedNoteIdProp = props.selectedNoteId;

  useEffect(() => {
    // Call selectedNoteIdProp when selectedNoteId changes
    selectedNoteIdProp(selectedNoteId);
  }, [selectedNoteId, selectedNoteIdProp]); // Include selectedNoteIdProp in the dependency array

  const handleNoteListClick = (noteId) => {
    localStorage.setItem("selectedNoteId", noteId);
    setSelectedNoteId(noteId);
  };

  return (
    <div className={Styles.noteListUlContainer}>
      {notes.map((note) => {
        return (
          <div
            className={Styles.noteListItemsContainer}
            key={note.id}
            onClick={() => {
              handleNoteListClick(note.id);
            }}
          >
            <div className={Styles.noteListItemIcon}>
              <span style={{ backgroundColor: note.color }}>
                {getInitials(note.title)}
              </span>
            </div>
            <div className={Styles.noteListItemTitle}>{note.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default NoteList;
