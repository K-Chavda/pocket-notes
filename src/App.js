import Styles from "./App.module.css";
import React from "react";

// Icons
import { FaPlus } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { IoMdSend } from "react-icons/io";

// Images
import Image from "./images/Pocket Note Image.png";

function App() {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.noteListLeftContainer}>
        <div className={Styles.headingContainer}>
          <p className={Styles.headingText}>Pocket Notes</p>
        </div>
        <div className={Styles.noteListContainer}>
          <div className={Styles.noteListUlContainer}>
            <div className={Styles.noteListItemsContainer}>
              <div className={Styles.noteListItemIcon}>
                <span>MN</span>
              </div>
              <div className={Styles.noteListItemTitle}>My Notes</div>
            </div>
            <div className={Styles.noteListItemsContainer}>
              <div className={Styles.noteListItemIcon}>
                <span>MP</span>
              </div>
              <div className={Styles.noteListItemTitle}>My personal grp</div>
            </div>
            <div className={Styles.noteListItemsContainer}>
              <div className={Styles.noteListItemIcon}>
                <span>EF</span>
              </div>
              <div className={Styles.noteListItemTitle}>Title for Notes</div>
            </div>
            <div className={Styles.noteListItemsContainer}>
              <div className={Styles.noteListItemIcon}>
                <span>GH</span>
              </div>
              <div className={Styles.noteListItemTitle}>Title for Notes</div>
            </div>
          </div>
          <div className={Styles.addNoteSticky}>
            <FaPlus />
          </div>
        </div>
      </div>
      <div className={Styles.noteListRightContainer}>
        <div className={Styles.inactiveNote}>
          <div className={Styles.noteImageContainer}>
            <img src={Image} alt="img" />
          </div>
          <div className={Styles.noteHeroDetailContainer}>
            <div className={Styles.noteHeroHeading}>
              <span>Pocket Notes</span>
            </div>
            <div className={Styles.noteHeroDetails}>
              <span>
                Send and receive messages without keeping your phone online. Use
                Pocket Notes on up to 4 linked devices and 1 mobile phone
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
        <div className={(Styles.activeNote, Styles.noteDetaiilsMainContainer)}>
          <div className={Styles.noteDetailHeadingContainer}>
            <div className={Styles.noteDetailItem}>
              <div className={Styles.noteDetailItemIcon}>
                <span>MN</span>
              </div>
              <div className={Styles.noteDetailItemTitle}>My Notes</div>
            </div>
          </div>
          <div className={Styles.noteDetailsContainer}>
            <div className={Styles.noteCardContainer}>
              <div className={Styles.noteCardDetails}>
                <p>
                  Another productive way to use this tool to begin a daily
                  writing routine. One way is to generate a random paragraph
                  with the intention to try to rewrite it while still keeping
                  the original meaning. The purpose here is to just get the
                  writing started so that when the writer goes onto their day's
                  writing projects, words are already flowing from their
                  fingers.
                </p>
              </div>
              <div className={Styles.noteCardDateTime}>
                <span className={Styles.noteDate}>9 Mar 2023</span>
                <span className={Styles.noteDateTimeSeperator}>
                  <GoDotFill />
                </span>
                <span className={Styles.noteTime}>10:10 AM</span>
              </div>
            </div>
          </div>
          <div className={Styles.noteInputContainer}>
            <div className={Styles.noteInputField}>
              <input
                type="text"
                placeholder="Enter your text here..........."
              />
              <span className={Styles.noteSubmitButton}>
                <IoMdSend />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
