import Styles from "./App.module.css";
import React from "react";

function App() {
  return (
    <div className={Styles.ainContainer}>
      <div className={Styles.oteListLeftContainer}>
        <div className={Styles.eadingContainer}>
          <p className={Styles.eadingText}>Pocket Note</p>
        </div>
        <div className={Styles.oteListContainer}>
          <div className={Styles.oteListUlContainer}>
            <div className={Styles.oteListItemsContainer}>
              <div className={Styles.oteListItemIcon}>
                <span>AB</span>
              </div>
              <div className={Styles.oteListItemTitle}>Title for Notes</div>
            </div>
            <div className={Styles.oteListItemsContainer}>
              <div className={Styles.oteListItemIcon}>
                <span>CD</span>
              </div>
              <div className={Styles.oteListItemTitle}>Title for Notes</div>
            </div>
            <div className={Styles.oteListItemsContainer}>
              <div className={Styles.oteListItemIcon}>
                <span>EF</span>
              </div>
              <div className={Styles.oteListItemTitle}>Title for Notes</div>
            </div>
            <div className={Styles.oteListItemsContainer}>
              <div className={Styles.oteListItemIcon}>
                <span>GH</span>
              </div>
              <div className={Styles.oteListItemTitle}>Title for Notes</div>
            </div>
          </div>
          <div className={Styles.ddNoteSticky}>+</div>
        </div>
      </div>
      <div className={Styles.oteListRightContainer}></div>
    </div>
  );
}

export default App;
