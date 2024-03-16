import React, { useState } from "react";
import Styles from "./NoteDetailMobile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addNoteDetails } from "../../features/notes/noteSlice";
import getInitials from "../../functions/getInitials";

// Icons

import { GoDotFill } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

// Images
import Image from "../../images/Pocket Note Image.png";

function NoteDetailMobile({ noteId }) {
  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  console.log(vw);

  if (vw > 480) {
    window.location.replace("/");
  }
  const dispatch = useDispatch();
  const noteDetailList = useSelector((state) => state.notesObject);

  noteId = localStorage.getItem("selectedNoteId");

  const [opacity, setOpacity] = useState(0.3);
  const [input, setInput] = useState({
    noteId: noteId,
    noteText: "",
    createdDate: null,
    createdTime: null,
  });

  const noteDetail = noteDetailList.map((note) => {
    if (note.id === noteId) {
      return note.notes;
    } else {
      return null;
    }
  });

  const handleNoteAddClick = (e) => {
    if (input.noteText.trim()) {
      e.preventDefault();
      dispatch(addNoteDetails(input));
      setInput({
        noteId: null,
        noteText: "",
        createdDate: "",
        createdTime: "",
      });
    }
  };

  const handleChangeEvent = (e) => {
    function formatDate(date) {
      const options = { day: "numeric", month: "short", year: "numeric" };
      return new Date(date).toLocaleDateString("en-GB", options);
    }

    function formatTime(date) {
      return new Date(date).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    }

    // Example usage:
    const currentTime = formatTime(new Date()); // Get current time and format it

    // Example usage:
    const currentDate = formatDate(new Date()); // Get current date and format it

    setInput({
      ...input,
      noteId: noteId,
      noteText: e.target.value,
      createdDate: currentDate,
      createdTime: currentTime,
    });

    if (e.target.value.trim()) {
      setOpacity(1);
    } else {
      setOpacity(0.3);
    }
  };

  return (
    <>
      {noteId ? (
        <div className={Styles.noteDetaiilsMainContainer}>
          {noteDetailList.map((note, index) => {
            if (note.id === noteId) {
              return (
                <>
                  <div
                    className={Styles.noteDetailHeadingContainer}
                    key={note.id}
                  >
                    <span className={Styles.backButton}>
                      <a href="/">
                        <MdOutlineKeyboardBackspace />
                      </a>
                    </span>
                    <div className={Styles.noteDetailItem}>
                      <div className={Styles.noteDetailItemIcon}>
                        <span style={{ backgroundColor: note.color }}>
                          {getInitials(note.title)}
                        </span>
                      </div>
                      <div className={Styles.noteDetailItemTitle}>
                        {note.title}
                      </div>
                    </div>
                  </div>
                  <div className={Styles.noteDetailsContainer}>
                    {noteDetail[index].map((notes) => {
                      if (notes.id) {
                        return (
                          <>
                            <div
                              className={Styles.noteCardContainer}
                              key={notes.id}
                            >
                              <div className={Styles.noteCardDetails}>
                                <p>{notes.noteText}</p>
                              </div>
                              <div className={Styles.noteCardDateTime}>
                                <span className={Styles.noteDate}>
                                  {notes.createdDate}
                                </span>
                                <span className={Styles.noteDateTimeSeperator}>
                                  <GoDotFill />
                                </span>
                                <span className={Styles.noteTime}>
                                  {notes.createdTime}
                                </span>
                              </div>
                            </div>
                          </>
                        );
                      } else {
                        return <></>;
                      }
                    })}
                  </div>
                  <div className={Styles.noteInputContainer}>
                    <div className={Styles.noteInputField}>
                      <input
                        type="text"
                        value={input.noteText}
                        placeholder="Enter your text here"
                        onChange={handleChangeEvent}
                      />

                      <span
                        className={Styles.noteSubmitButton}
                        onClick={handleNoteAddClick}
                        style={{ opacity: opacity }}
                      >
                        <IoMdSend />
                      </span>
                    </div>
                  </div>
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      ) : (
        <>
          <div className={Styles.activeNote}>
            <div className={Styles.noteImageContainer}>
              <img src={Image} alt="img" />
            </div>
            <div className={Styles.noteHeroDetailContainer}>
              <div className={Styles.noteHeroHeading}>
                <span>Pocket Notes</span>
              </div>
              <div className={Styles.noteHeroDetails}>
                <span>
                  Send and receive messages without keeping your phone online.
                  Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                </span>
              </div>
            </div>
            <div className={Styles.noteEncryptedContainer}>
              <span>
                <IoMdLock />
              </span>
              <span>end-to-end encrypted</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NoteDetailMobile;
