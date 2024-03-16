import Styles from "./App.module.css";
import React, { useState } from "react";
import NoteList from "./components/note items/NoteList";
import Popup from "./components/popup/Popup";
import NoteDetail from "./components/note Detail /NoteDetail";

// Icons
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

function App() {
  // let vw = Math.max(
  //   document.documentElement.clientWidth || 0,
  //   window.innerWidth || 0
  // );
  // let vh = Math.max(
  //   document.documentElement.clientHeight || 0,
  //   window.innerHeight || 0
  // );
  const [popupState, setPopupState] = useState(false);

  const [selectedNoteId, setSelectedNoteId] = useState("");

  const notes = useSelector((state) => state.notesObject);

  const handleAddNoteClick = () => {
    setPopupState(true);
  };

  const closePopupWindow = () => {
    setPopupState(false);
  };

  const selectedNoteIdProp = (data) => {
    setSelectedNoteId(data);
  };

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.noteListLeftContainer}>
        <div className={Styles.headingContainer}>
          <p className={Styles.headingText}>Pocket Notes</p>
        </div>
        <div className={Styles.noteListContainer}>
          {notes ? <NoteList selectedNoteId={selectedNoteIdProp} /> : <></>}
          <div className={Styles.addNoteSticky} onClick={handleAddNoteClick}>
            <FaPlus />
          </div>
        </div>
      </div>
      <div className={Styles.noteListRightContainer}>
        <NoteDetail noteId={selectedNoteId} />
      </div>
      {popupState ? (
        <div className={Styles.modelDialog}>
          <Popup onClose={closePopupWindow} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
