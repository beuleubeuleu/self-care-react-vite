import React from "react";
import "./MessageTypeToggle.css"

export const MessageTypeToggle = () => {
  return (
      <div className="message-type-toggle-container">
        <label htmlFor="add-affirmation" className={"message-type-toggle-text"}>Affirmation</label>
        <label className="switch">
          <input type="checkbox" name="citation-type"/>
          <span className="slider round"></span>
        </label>
        <label htmlFor="add-mantra" className={"message-type-toggle-text"}>Mantra</label>
      </div>
  )
}