import React, { useState, useRef, useEffect } from "react";
import Styles from "./Popup.module.css";

import { addNote } from "../../features/notes/noteSlice";
import { useDispatch, useSelector } from "react-redux";

function Popup({ onClose }) {
  const existingNoteGroups = useSelector((state) => state.notesObject);

  const [selectedColor, setSelectedColor] = useState(null);
  const [input, setInput] = useState({ title: "", color: "" });

  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setInput({ ...input, color: color });
  };

  const handleInputChange = (e) => {
    setInput({ ...input, title: e.target.value });
  };

  const dispatch = useDispatch();
  const handleCreateNewNote = () => {
    if (!input.title) {
      alert("Please Enter a Group Name");
      return;
    }

    if (existingNoteGroups.some((group) => group.title === input.title)) {
      alert("Group Already Exists");
      return;
    }

    dispatch(addNote(input));
    onClose();
  };

  return (
    <div ref={popupRef} className={Styles.notePopup}>
      <div className={Styles.notePopupHeading}>
        <span>Create New Group</span>
      </div>
      <div className={Styles.notePopupInput}>
        <span>Group Name</span>
        <input
          type="text"
          placeholder="Enter Group Name"
          value={input.title}
          onChange={handleInputChange}
        />
      </div>
      <div className={Styles.notePopupColorSelector}>
        <span>Choose Colour</span>
        <div className={Styles.noteColorContainer}>
          <div className={Styles.noteColorOptions}>
            <span
              style={{ backgroundColor: "#B38BFA" }}
              className={`${
                selectedColor === "#B38BFA" ? Styles.selectedColor : ""
              }`}
              onClick={() => handleColorSelection("#B38BFA")}
            ></span>
          </div>
          <div className={Styles.noteColorOptions}>
            <span
              style={{ backgroundColor: "#FF79F2" }}
              className={`${
                selectedColor === "#FF79F2" ? Styles.selectedColor : ""
              }`}
              onClick={() => handleColorSelection("#FF79F2")}
            ></span>
          </div>
          <div className={Styles.noteColorOptions}>
            <span
              style={{ backgroundColor: "#43E6FC" }}
              className={`${
                selectedColor === "#43E6FC" ? Styles.selectedColor : ""
              }`}
              onClick={() => handleColorSelection("#43E6FC")}
            ></span>
          </div>
          <div className={Styles.noteColorOptions}>
            <span
              style={{ backgroundColor: "#F19576" }}
              className={`${
                selectedColor === "#F19576" ? Styles.selectedColor : ""
              }`}
              onClick={() => handleColorSelection("#F19576")}
            ></span>
          </div>
          <div className={Styles.noteColorOptions}>
            <span
              style={{ backgroundColor: "#0047FF" }}
              className={`${
                selectedColor === "#0047FF" ? Styles.selectedColor : ""
              }`}
              onClick={() => handleColorSelection("#0047FF")}
            ></span>
          </div>
          <div className={Styles.noteColorOptions}>
            <span
              style={{ backgroundColor: "#6691FF" }}
              className={`${
                selectedColor === "#6691FF" ? Styles.selectedColor : ""
              }`}
              onClick={() => handleColorSelection("#6691FF")}
            ></span>
          </div>
        </div>
      </div>
      <div className={Styles.createButtonContainer}>
        <button onClick={handleCreateNewNote}>Create</button>
      </div>
    </div>
  );
}

export default Popup;
